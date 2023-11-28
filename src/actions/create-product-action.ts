'use server'

import { redirect } from "next/navigation"
import { revalidateTag } from "next/cache"
import { IProduct } from "@/types/types"

export const createProductAction = async (formData: FormData) => {
  try {
    const name = formData.get('name')?.toString()
    const description = formData.get('description')?.toString()
    const price = formData.get('price')?.toString()

    const product: IProduct = {
      name: name as string,
      description: description as string,
      price: price as string
    }

    console.log( product )

    const res = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const data = await res.json()
    revalidateTag('products')
    // return data
  } catch (error) {
    console.error(error)
  }
  redirect('/products')
}