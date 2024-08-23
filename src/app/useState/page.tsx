"use client"

import { useCountStore } from "@/store/count-store"

export default function UseStatePage() {
  //* ZUSTAND STORE
  const count = useCountStore((state) => state.count)
  const isTyping = useCountStore((state) => state.isTyping)
  const increment = useCountStore((state) => state.increment)
  const decrement = useCountStore((state) => state.decrement)
  const toggleIsTyping = useCountStore((state) => state.toggleIsTyping)
  return (
    <main className="space-y-8">
      <h1 className="text-center text-3xl font-semibold tracking-tight">
        useState
      </h1>

      <section className="grid justify-start gap-2">
        <p>Count: {count}</p>
        <button
          className="inline-block rounded bg-emerald-200 px-3 py-2"
          onClick={() => increment(5)}
        >
          Increment count by 5
        </button>
        <button
          className="inline-block rounded bg-rose-200 px-3 py-2"
          onClick={() => decrement(2)}
        >
          Decrement count by 2
        </button>
        <button
          className="inline-block rounded bg-orange-200 px-3 py-2"
          onClick={toggleIsTyping}
        >
          Toggle isTyping
        </button>
      </section>
    </main>
  )
}
