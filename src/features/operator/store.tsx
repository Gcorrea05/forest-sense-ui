import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { advanceOperation, initialState, machines, type DemoState } from './model';
import { localAdapter } from './service';
type Store = { state: DemoState; update: (fn: (state: DemoState) => DemoState) => void; start: (ids: string[]) => void; reset: () => void; error: string; hydrated: boolean };
const Context = createContext<Store | null>(null);
export function OperatorProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(initialState);
  const ref = useRef(state);
  const [error, setError] = useState('');
  const [hydrated, setHydrated] = useState(false);
  const update = (fn: (s: DemoState) => DemoState) => { const next = fn(ref.current); next.revision = Date.now(); ref.current = next; setState(next); void localAdapter.save(next).catch(() => setError('Não foi possível guardar as escolhas neste navegador.')); };
  useEffect(() => {
    let alive = true;
    void localAdapter.read().then(data => { if (!alive) return; const now = Date.now(); for (const m of machines) { const op = data.operations[m.id]; if (op?.status === 'running' && op.startedAt == null) op.startedAt = now - op.stage * 10000; } ref.current = data; setState(data); setHydrated(true); });
    const unsubscribe = localAdapter.subscribe(data => { if (data.revision >= ref.current.revision) { ref.current = data; setState(data); } });
    return () => { alive = false; unsubscribe(); };
  }, []);
  useEffect(() => { document.documentElement.classList.toggle('dark', state.theme === 'dark'); document.documentElement.dataset['accent'] = state.accent; }, [state.theme, state.accent]);
  useEffect(() => {
    if (!hydrated) return;
    const timer = window.setInterval(() => { const current = ref.current; let changed = false; const operations = { ...current.operations }; for (const machine of machines) { const op = operations[machine.id]; if (!op || op.status !== 'running' || op.startedAt == null) continue; const stage = Math.min(5, Math.floor((Date.now() - op.startedAt) / 10000)); if (stage > op.stage) { operations[machine.id] = advanceOperation(machine, op, stage); changed = true; } } if (changed) update(s => ({ ...s, operations })); }, 500);
    return () => window.clearInterval(timer);
  }, [hydrated]);
  const start = (ids: string[]) => update(s => { const operations = { ...s.operations }; for (const id of ids) { const machine = machines.find(m => m.id === id); const prior = operations[id]; if (!machine || machine.source !== 'simulation' || !prior) continue; const run = prior.run + 1; const next = advanceOperation(machine, { status: 'running', stage: -1, startedAt: Date.now(), observations: [], events: [], run }, 0); next.events = [...prior.events, ...next.events]; operations[id] = next; } return { ...s, operations }; });
  const reset = () => { const next = initialState(); for (const op of Object.values(next.operations)) if (op.status === 'running') op.startedAt = Date.now() - op.stage * 10000; update(() => next); };
  return <Context.Provider value={{ state, update, start, reset, error, hydrated }}>{children}</Context.Provider>;
}
export function useOperator() { const context = useContext(Context); if (!context) throw new Error('OperatorProvider is required'); return context; }
