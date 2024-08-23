import { create } from "zustand"

type State = {
  count: number
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
}

export const useCountStore = create<State & Actions>()((set) => ({
  count: 0,
  increment: (qty) => set((state) => ({ count: state.count + qty })),
  decrement: (qty) => set((state) => ({ count: state.count - qty })),
}))
