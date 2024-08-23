"use client"

import { ChangeEvent, MouseEvent, useReducer, useState } from "react"

type State = {
  count: number
  name: string
}

type Action =
  | {
      type: "increment"
      payload: number
    }
  | {
      type: "decrement"
      payload: number
    }
  | {
      type: "setName"
      payload: string
    }

export default function useReducerPage() {
  //* USEREDUCER
  const INITIAL_STATE = {
    count: 0,
    name: "default",
  }
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  function reducer(state: State, action: Action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload }
      case "decrement":
        return { ...state, count: state.count - action.payload }
      case "setName":
        return { ...state, name: action.payload }
      default:
        throw new Error("Unknown action type")
    }
  }

  //* USESTATE
  type Vote = { count: number; name: string }
  const [vote, setVote] = useState<Vote>({
    count: 10,
    name: "vote",
  })

  //* HANDLER FUNCTIONS
  function increaseVote(num: number) {
    setVote((prev) => ({ ...prev, count: prev.count + num }))
  }
  function decreaseVote(num: number) {
    setVote((prev) => ({ ...prev, count: prev.count - num }))
  }

  function changeName(e: ChangeEvent<HTMLInputElement>) {
    setVote((prev) => ({ ...prev, name: e.target.value }))
  }
  return (
    <main className="space-y-8">
      <h1 className="text-center text-3xl font-semibold tracking-tight">
        useReducer
      </h1>
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          <span className="text-violet-600">useReducer</span> section
        </h2>
        <pre className="rounded bg-violet-100 p-4 font-bold">
          {JSON.stringify(state, null, 2)}
        </pre>
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
        <p>
          <label className="grid justify-start">
            <span>Name</span>
            <input
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "setName", payload: e.target.value })
              }
              className="rounded border border-gray-300 p-2"
            />
          </label>
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          <span className="text-pink-600">useState</span> section
        </h2>
        <pre className="rounded bg-pink-100 p-4 font-bold">
          {JSON.stringify(vote, null, 2)}
        </pre>
        <div className="space-x-2">
          <button
            onClick={() => increaseVote(2)}
            className="rounded bg-sky-200 px-3 py-1 active:brightness-90 active:saturate-150"
          >
            Increase vote by 2
          </button>
          <button
            onClick={() => decreaseVote(1)}
            className="rounded bg-pink-200 px-3 py-1 active:brightness-90 active:saturate-150"
          >
            Decrease vote by 1
          </button>
        </div>
        <p>
          <label className="grid justify-start">
            <span>Name</span>
            <input
              value={vote.name}
              onChange={changeName}
              className="rounded border border-gray-300 p-2"
            />
          </label>
        </p>
      </section>
    </main>
  )
}
