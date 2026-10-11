import { describe, expect, it } from 'vitest';
import { acknowledge, activeAlert, advanceOperation, initialState, machines, metricNote, observation, ranking, scoreBreakdown, visibleMachines, weightedScore } from './model';
describe('Domain rules', () => {
 it('weights 80/20 yield A 96 and B 84; 20/80 yield A 84 and B 96', () => {
 const a = { volume: 100, fuel: 80 }; const b = { volume: 80, fuel: 100 };
 expect(weightedScore(a,{volume:80,fuel:20,quality:0})).toBe(96); expect(weightedScore(b,{volume:80,fuel:20,quality:0})).toBe(84);
 expect(weightedScore(a,{volume:20,fuel:80,quality:0})).toBe(84); expect(weightedScore(b,{volume:20,fuel:80,quality:0})).toBe(96);
 });
 it('uses minimum for volume and maximum for fuel', () => { expect(metricNote(20,25,'min')).toBe(80); expect(metricNote(25,20,'max')).toBe(80); });
 it('requires exactly 100 percent to score', () => { expect(weightedScore({volume:100,fuel:100},{volume:60,fuel:20,quality:0})).toBeNull(); });
 it('missing readings do not receive scores', () => { expect(scoreBreakdown([{stage:4,volume:null,fuel:null,quality:null}],{volume:60,fuel:40,quality:0}).score).toBeNull(); });
 it('ranks within family and source only', () => { const rows = ranking(initialState(),'Forwarder'); expect(rows.length).toBe(5); expect(rows.every(r => r.machine.family === 'Forwarder' && r.machine.source === 'simulation')).toBe(true); });
 it('compares only shared valid stages and not number of stages', () => { const state = initialState(); const rows = ranking(state,'Forwarder'); const valid = rows.filter(r => r.score != null); expect(valid.every(r => JSON.stringify(r.stages) === '[0]')).toBe(true); });
 it('acknowledgement preserves critical event without declaring resolution', () => { const state = initialState(); const op = state.operations['FW 37']; const event = op.events.find(e => e.kind === 'critical'); if (!event) throw new Error('Fixture missing'); const next = acknowledge(op,event.id); expect(next.events.length).toBe(op.events.length); expect(next.events.find(e => e.id === event.id)).toMatchObject({kind:'critical',acknowledged:true}); expect(activeAlert(next)?.kind).toBe('critical'); });
 it('changing weights leaves the alert history untouched', () => { const state = initialState(); const before = JSON.stringify(state.operations); state.criteria.Forwarder = {volume:20,fuel:80,quality:0}; ranking(state,'Forwarder'); expect(JSON.stringify(state.operations)).toBe(before); });
 it('simulation has attention, critical, recovery, missing then finished', () => { const m = machines[0]; const op = advanceOperation(m,{status:'running',stage:-1,startedAt:0,observations:[],events:[],run:1},5); expect(op.events.map(e => e.kind)).toEqual(['attention','critical','recovery','missing','finished']); expect(op.status).toBe('finished'); expect(op.observations[4].fuel).toBeNull(); expect(op.observations[3]).toEqual(observation(m,3)); });
 it('views preserve query, sort and selected machines', () => { const state = initialState(); state.query.family='Forwarder'; state.selected=['FW 36']; const ids=visibleMachines(state).map(m => m.id); state.view='list'; expect(visibleMachines(state).map(m => m.id)).toEqual(ids); expect(state.selected).toEqual(['FW 36']); expect(state.query.family).toBe('Forwarder'); });
 it('contains exactly the requested 14 machines', () => { expect(machines.map(m=>m.id)).toEqual(['FW 36','FW 37','FW 38','FW 41','FW 42','FW 43','HV 59','HV 60','HV 61','HV 62','HV 67','HV 68','HV 69','HV 70']); });
});
