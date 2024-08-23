"use client"

import { useCountStore } from "@/store/count-store"

export default function UseStatePage() {
  //* ZUSTAND STORE
  const { count, increment, decrement } = useCountStore((state) => state)
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
          Increment by 5
        </button>
        <button
          className="inline-block rounded bg-rose-200 px-3 py-2"
          onClick={() => decrement(2)}
        >
          Decrement by 2
        </button>
      </section>
    </main>
  )
}
