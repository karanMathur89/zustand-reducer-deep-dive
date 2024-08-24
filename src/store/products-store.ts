import { create } from "zustand"

//* TYPES
type State = {
  name: string
  weight: number
  price: number
  color: string
}

type Action =
  | { type: "UPDATE_NAME"; payload: string }
  | { type: "UPDATE_WEIGHT"; payload: number }
  | { type: "UPDATE_PRICE"; payload: number }
  | { type: "UPDATE_COLOR"; payload: string }
  | { type: "RESET" }

// Define the initial state
const INITIAL_STATE: State = {
  name: "smartphone",
  weight: 200,
  price: 899,
  color: "black",
}

// Create the reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload }
    case "UPDATE_WEIGHT":
      return { ...state, weight: action.payload }
    case "UPDATE_PRICE":
      return { ...state, price: action.payload }
    case "UPDATE_COLOR":
      return { ...state, color: action.payload }
    case "RESET":
      return INITIAL_STATE
    default:
      return state
  }
}

// Create the Zustand store
export const useProductStore = create<
  State & {
    dispatch: (action: Action) => void
  }
>((set) => ({
  ...INITIAL_STATE,
  dispatch: (action) => set((state) => reducer(state, action)),
}))
