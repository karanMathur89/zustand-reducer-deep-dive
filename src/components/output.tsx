"use client"

import { useCountStore } from "@/store/count-store"

export default function Output() {
  const { count, isTyping } = useCountStore((state) => state)
  return (
    <section className="grid gap-2 rounded border border-blue-300 bg-blue-100 p-2">
      <p className="text-xl font-semibold">Output</p>
      <p className="border-b border-dashed border-blue-300 pb-2 text-sm text-gray-600">
        This is a client component in the main layout
      </p>
      <pre className="mt-4 font-semibold">
        {JSON.stringify({ count, isTyping }, null, 2)}
      </pre>
    </section>
  )
}
