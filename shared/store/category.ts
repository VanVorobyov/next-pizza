import { create } from 'zustand';

export interface IState {
  activeId: number;
  setActiveId: (id: number) => void;
}

export const useCategoryStore = create<IState>((set) => ({
  activeId: 0,
  setActiveId: (id) => set({ activeId: id }),
}));
