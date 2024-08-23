"use client"

import { useReducer } from "react"

type State = {
  count: number
}

type Action = {
  type: "increment" | "decrement"
  payload: number
}

export default function useReducerPage() {
  //* USEREDUCER
  const INITIAL_STATE = {
    count: 0,
  }
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload }
      case "decrement":
        return { count: state.count - action.payload }
      default:
        throw new Error("Unknown action type")
    }
  }
  return (
    <main>
      <h1 className="text-center text-3xl font-semibold tracking-tight">
        useReducer
      </h1>
      <pre className="font-bold">{JSON.stringify(state, null, 2)}</pre>
      <div className="space-x-2">
        <button
          onClick={() => dispatch({ type: "increment", payload: 10 })}
          className="rounded bg-green-200 px-3 py-1 active:brightness-90 active:saturate-150"
        >
          Increment by 10
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", payload: 1 })}
          className="rounded bg-red-200 px-3 py-1 active:brightness-90 active:saturate-150"
        >
          Decrement by 1
        </button>
      </div>
    </main>
  )
}
