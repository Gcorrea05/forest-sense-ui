export type Family = 'Forwarder' | 'Harvester';
export type MetricId = 'volume' | 'fuel' | 'quality';
export type Weights = Record<MetricId, number>;
export type Criteria = Record<Family, Weights>;
export type Observation = { stage: number; volume: number | null; fuel: number | null; quality: number | null };
export type Event = { id: string; stage: number; kind: 'attention' | 'critical' | 'recovery' | 'missing' | 'finished'; acknowledged: boolean; observed: number | null; reference: number; text: string; origin: 'deterministic' };
export type Machine = { id: string; family: Family; model: string; source: 'simulation' | 'historical'; initialStage: number; initialStatus: 'ready' | 'running' | 'finished'; index: number };
export type Operation = { status: 'ready' | 'running' | 'finished'; stage: number; startedAt: number | null; observations: Observation[]; events: Event[]; run: number };
export type Query = { search: string; family: string; status: string; source: string; sort: string; attention: boolean };
export type SavedQuery = { id: string; name: string; query: Query };
export type DemoState = { criteria: Criteria; operations: Record<string, Operation>; query: Query; savedQueries: SavedQuery[]; view: 'grid' | 'list'; selected: string[]; theme: 'light' | 'dark'; accent: 'forest' | 'blue' | 'copper'; revision: number };
export const metrics: { id: MetricId; name: string; description: string; unit: string; reference: number; direction: 'min' | 'max' }[] = [
  { id: 'volume', name: 'Volume por bloco', description: 'Volume movimentado ou processado em uma etapa válida.', unit: 'm³', reference: 25, direction: 'min' },
  { id: 'fuel', name: 'Combustível por bloco', description: 'Consumo observado no mesmo bloco de operação.', unit: 'L', reference: 20, direction: 'max' },
  { id: 'quality', name: 'Qualidade da operação', description: 'Atendimento ao padrão operacional demonstrativo.', unit: '%', reference: 90, direction: 'min' },
];
export const machineIds = ['FW 36','FW 37','FW 38','FW 41','FW 42','FW 43','HV 59','HV 60','HV 61','HV 62','HV 67','HV 68','HV 69','HV 70'];
export const machines: Machine[] = machineIds.map((id, index) => ({ id, index, family: index < 6 ? 'Forwarder' : 'Harvester', model: index < 6 ? 'Forwarder · Série 1910' : 'Harvester · Série 1270', source: [5, 11, 13].includes(index) ? 'historical' : 'simulation', initialStage: [0,2,1,0,3,5,0,0,2,1,0,5,0,5][index] ?? 0, initialStatus: [5,11,13].includes(index) ? 'finished' : [3,10,12].includes(index) ? 'ready' : 'running' }));
export const emptyQuery: Query = { search: '', family: 'all', status: 'all', source: 'all', sort: 'attention', attention: false };
export function observation(machine: Machine, stage: number): Observation {
  const i = machine.index;
  const volumes = [27, 24, 18, 28, null, 26];
  const fuels = [17, 24, 33, 18, null, 19];
  return { stage, volume: volumes[stage] == null ? null : Number((Number(volumes[stage]) * (0.83 + (i % 6) * 0.045)).toFixed(1)), fuel: fuels[stage] == null ? null : Number((Number(fuels[stage]) * (0.91 + ((5 - i % 6)) * 0.035)).toFixed(1)), quality: stage === 4 ? null : 82 + i % 5 * 3 };
}
export function eventFor(machine: Machine, stage: number, run: number): Event | null {
  const o = observation(machine, stage);
  const base = { id: `${machine.id}-${run}-${stage}`, stage, acknowledged: false, reference: 20, origin: 'deterministic' as const };
  if (stage === 1) return { ...base, kind: 'attention', observed: o.fuel, text: 'Consumo acima da referência' };
  if (stage === 2) return { ...base, kind: 'critical', observed: o.fuel, text: 'Desvio crítico de combustível' };
  if (stage === 3) return { ...base, kind: 'recovery', observed: o.fuel, text: 'Consumo voltou à referência' };
  if (stage === 4) return { ...base, kind: 'missing', observed: null, text: 'Leitura indisponível neste bloco' };
  if (stage === 5) return { ...base, kind: 'finished', observed: o.fuel, text: 'Operação encerrada' };
  return null;
}
export function createOperation(machine: Machine): Operation {
  const ready = machine.initialStatus === 'ready';
  const stages = ready ? [] : Array.from({ length: machine.initialStage + 1 }, (_, s) => s);
  return { status: machine.initialStatus, stage: machine.initialStage, startedAt: null, run: 0, observations: stages.map(s => observation(machine, s)), events: stages.flatMap(s => { const e = eventFor(machine, s, 0); return e ? [e] : []; }) };
}
export function initialState(): DemoState {
  return { criteria: { Forwarder: { volume: 60, fuel: 40, quality: 0 }, Harvester: { volume: 60, fuel: 40, quality: 0 } }, operations: Object.fromEntries(machines.map(m => [m.id, createOperation(m)])), query: { ...emptyQuery }, savedQueries: [], view: 'grid', selected: [], theme: 'light', accent: 'forest', revision: 0 };
}
export function metricNote(value: number | null, reference: number, direction: 'min' | 'max'): number | null {
  if (value == null || !Number.isFinite(value)) return null;
  if (direction === 'max' && value === 0) return 100;
  return Math.max(0, Math.min(100, direction === 'min' ? value / reference * 100 : reference / value * 100));
}
export function weightedScore(notes: Partial<Record<MetricId, number | null>>, weights: Weights): number | null {
  if (Object.values(weights).reduce((a,b) => a+b,0) !== 100) return null;
  let result = 0;
  for (const metric of metrics) { const weight = weights[metric.id]; if (weight <= 0) continue; const note = notes[metric.id]; if (note == null) return null; result += note * weight / 100; }
  return Number(result.toFixed(1));
}
export function scoreBreakdown(observations: Observation[], weights: Weights) {
  const valid = observations.filter(o => metrics.every(m => weights[m.id] === 0 || o[m.id] != null));
  const notes: Partial<Record<MetricId, number | null>> = {};
  for (const metric of metrics) notes[metric.id] = valid.length ? valid.reduce((sum, o) => sum + (metricNote(o[metric.id], metric.reference, metric.direction) ?? 0), 0) / valid.length : null;
  return { notes, score: valid.length ? weightedScore(notes, weights) : null, coverage: valid.length };
}
export function ranking(state: DemoState, family: Family, source: 'simulation' | 'historical' = 'simulation', weights = state.criteria[family]) {
  const group = machines.filter(m => m.family === family && m.source === source);
  const candidates = group.filter(m => state.operations[m.id]?.observations.some(o => metrics.every(metric => weights[metric.id] === 0 || o[metric.id] != null)));
  const common = [0,1,2,3,4,5].filter(stage => candidates.length > 0 && candidates.every(m => state.operations[m.id]?.observations.some(o => o.stage === stage && metrics.every(metric => weights[metric.id] === 0 || o[metric.id] != null))));
  return group.map(machine => { const operation = state.operations[machine.id]; const observations = operation?.observations.filter(o => common.includes(o.stage)) ?? []; return { machine, ...scoreBreakdown(observations, weights), stages: common }; }).sort((a,b) => (b.score ?? -1) - (a.score ?? -1) || a.machine.index - b.machine.index);
}
export function advanceOperation(machine: Machine, operation: Operation, stage: number): Operation {
  const next = { ...operation, stage, status: stage >= 5 ? 'finished' as const : 'running' as const, observations: [...operation.observations], events: [...operation.events] };
  for (let s = operation.stage + 1; s <= stage; s++) { next.observations.push(observation(machine, s)); const event = eventFor(machine, s, operation.run); if (event) next.events.push(event); }
  return next;
}
export function acknowledge(operation: Operation | undefined, id: string): Operation { if (!operation) throw new Error('Operação indisponível'); return { ...operation, events: operation.events.map(e => e.id === id ? { ...e, acknowledged: true } : e) }; }
export function activeAlert(operation: Operation | undefined): Event | undefined { if (!operation) return undefined; return [...operation.events].reverse().find(e => (e.kind === 'critical' || e.kind === 'attention') && e.stage >= operation.stage - 1 && operation.stage < 3); }
export function visibleMachines(state: DemoState): Machine[] {
  const q = state.query;
  return machines.filter(m => { const o = state.operations[m.id]; return m.id.toLowerCase().includes(q.search.toLowerCase()) && (q.family === 'all' || m.family === q.family) && (q.source === 'all' || m.source === q.source) && (q.status === 'all' || o?.status === q.status) && (!q.attention || !!(o && activeAlert(o))); }).sort((a,b) => q.sort === 'name' ? a.id.localeCompare(b.id) : Number(!!activeAlert(state.operations[b.id])) - Number(!!activeAlert(state.operations[a.id])) || a.index-b.index);
}
export const statusLabel = { ready: 'Pronta para iniciar', running: 'Em operação', finished: 'Encerrada' };

export function getOperation(state: DemoState, id: string): Operation { const existing = state.operations[id]; if (existing) return existing; const machine = machines.find(m => m.id === id); if (!machine) throw new Error('Máquina indisponível'); return createOperation(machine); }
