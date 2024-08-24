"use client"

import { useCountStore } from "@/store/count-store"
import { useUserDetailsStore } from "@/store/user-details"
import { useProductStore } from "@/store/products-store"

export default function Output() {
  const { count, isTyping } = useCountStore((state) => state)
  const name = useUserDetailsStore((state) => state.name)
  const age = useUserDetailsStore((state) => state.age)
  const products = useProductStore((state) => state)
  return (
    <section className="grid gap-2 rounded border border-blue-300 bg-blue-100 p-2">
      <p className="text-xl font-semibold">Output</p>
      <p className="border-b border-dashed border-blue-300 pb-2 text-sm text-gray-600">
        This is a client component in the main layout
      </p>
      <pre className="mt-4 font-semibold">
        {JSON.stringify({ count, isTyping }, null, 2)}
      </pre>
      <pre className="font-semibold">
        {JSON.stringify({ name, age }, null, 2)}
      </pre>
      <pre className="font-semibold">{JSON.stringify(products, null, 2)}</pre>
    </section>
  )
}
