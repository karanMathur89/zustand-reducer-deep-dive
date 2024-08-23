import { create } from "zustand"

type State = {
  count: number
  isTyping: boolean
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
  toggleIsTyping: () => void
}

export const useCountStore = create<State & Actions>()((set) => ({
  count: 0,
  isTyping: false,
  increment: (qty) => set((state) => ({ count: state.count + qty })),
  decrement: (qty) => set((state) => ({ count: state.count - qty })),
  toggleIsTyping: () => set((state) => ({ isTyping: !state.isTyping })),
}))
