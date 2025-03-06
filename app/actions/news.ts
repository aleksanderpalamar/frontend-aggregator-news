'use server'

import { cookies } from 'next/headers'

export async function getNewsById(id: string) {
  const cookieStore = await cookies()
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${id}`, {
      headers: {
        Authorization: `Bearer ${cookieStore.get("token")?.value}`,
      }
    })

    if (!res.ok) {
      return null
    }

    return res.json()
  } catch (error) {
    console.error('Erro ao buscar notícia:', error)
    return null
  }
}