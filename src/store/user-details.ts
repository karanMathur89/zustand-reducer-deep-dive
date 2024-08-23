import { create } from "zustand"

type State = {
  name: string
  age: number
}

type Actions = {
  changeName: (value: string) => void
  changeAge: (value: number) => void
}

export const useUserDetailsStore = create<State & Actions>((set) => ({
  name: "",
  age: 21,
  changeName: (value) => set((state) => ({ name: value })),
  changeAge: (value) => set((state) => ({ age: value })),
}))
