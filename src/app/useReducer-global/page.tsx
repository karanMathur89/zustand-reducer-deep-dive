"use client"

import { useProductStore } from "@/store/products-store"

export default function useReducerGlobalPage() {
  const name = useProductStore((state) => state.name)
  const price = useProductStore((state) => state.price)
  const dispatch = useProductStore((state) => state.dispatch)
  return (
    <main className="space-y-8">
      <h1 className="text-center text-3xl font-semibold tracking-tight">
        useReducer Global
      </h1>
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          <span className="text-sky-600">Products</span> section
        </h2>
        <p>
          <label className="grid justify-start">
            <span>Name</span>
            <input
              value={name}
              onChange={(e) => {
                dispatch({ type: "UPDATE_NAME", payload: e.target.value })
              }}
              className="rounded border border-gray-300 p-2"
            />
          </label>
        </p>
        <p>
          <label className="grid justify-start">
            <span>Price</span>
            <input
              type="number"
              value={price}
              onChange={(e) => {
                dispatch({
                  type: "UPDATE_PRICE",
                  payload: Number(e.target.value),
                })
              }}
              className="rounded border border-gray-300 p-2"
            />
          </label>
        </p>
      </section>
    </main>
  )
}
