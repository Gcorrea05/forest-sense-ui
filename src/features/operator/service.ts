import { initialState, type DemoState } from './model';
export const STORAGE_KEY = 'operator-intelligence-demo-v1';
/** Replace this adapter with a REST implementation of this interface. No endpoint contract is assumed. */
export interface OperatorDataService { read(): Promise<DemoState>; save(state: DemoState): Promise<void>; subscribe(listener: (state: DemoState) => void): () => void; reset(): Promise<DemoState> }
export const localAdapter: OperatorDataService = {
  async read() { try { const raw = localStorage.getItem(STORAGE_KEY); if (raw) { const data = JSON.parse(raw) as DemoState; if (data.operations && data.criteria && typeof data.revision === 'number') return data; } } catch { /* Restore deterministic initial state if local data is unavailable. */ } return initialState(); },
  async save(state) { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); },
  subscribe(listener) { const handler = (e: StorageEvent) => { if (e.key !== STORAGE_KEY || !e.newValue) return; try { listener(JSON.parse(e.newValue) as DemoState); } catch { /* Ignore invalid external storage. */ } }; window.addEventListener('storage', handler); return () => window.removeEventListener('storage', handler); },
  async reset() { const state = initialState(); await this.save(state); return state; },
};
