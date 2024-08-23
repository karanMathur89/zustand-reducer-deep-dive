"use client"

import { useCountStore } from "@/store/count-store"
import { useUserDetailsStore } from "@/store/user-details"

export default function UseStatePage() {
  //* COUNT STORE
  const count = useCountStore((state) => state.count)
  const isTyping = useCountStore((state) => state.isTyping)
  const increment = useCountStore((state) => state.increment)
  const decrement = useCountStore((state) => state.decrement)
  const toggleIsTyping = useCountStore((state) => state.toggleIsTyping)

  //* USER DETAILS STORE
  const name = useUserDetailsStore((state) => state.name)
  const age = useUserDetailsStore((state) => state.age)
  const changeName = useUserDetailsStore((state) => state.changeName)
  const changeAge = useUserDetailsStore((state) => state.changeAge)
  return (
    <main className="space-y-8">
      <h1 className="text-center text-3xl font-semibold tracking-tight">
        useState
      </h1>

      <section className="grid justify-start gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">Count section</h2>
        <button
          className="inline-block rounded bg-emerald-200 px-3 py-1 active:brightness-90 active:saturate-150"
          onClick={() => increment(5)}
        >
          Increment count by 5
        </button>
        <button
          className="inline-block rounded bg-rose-200 px-3 py-1 active:brightness-90 active:saturate-150"
          onClick={() => decrement(2)}
        >
          Decrement count by 2
        </button>
        <button
          className="inline-block rounded bg-orange-200 px-3 py-1 active:brightness-90 active:saturate-150"
          onClick={toggleIsTyping}
        >
          Toggle isTyping
        </button>
      </section>

      <section className="grid justify-start gap-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          User Details section
        </h2>
        <form className="space-y-2">
          <p>
            <label className="grid">
              <span>Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => changeName(e.target.value)}
                className="rounded border border-gray-300 p-2"
              />
            </label>
          </p>
          <p>
            <label className="grid">
              <span>Age</span>
              <input
                type="number"
                value={age}
                onChange={(e) => changeAge(Number(e.target.value))}
                className="rounded border border-gray-300 p-2"
              />
            </label>
          </p>
        </form>
      </section>
    </main>
  )
}
