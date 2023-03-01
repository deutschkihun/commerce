import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProduct(id: number) {
  try {
    return await prisma.products.findUnique({
      where: { id },
    })
  } catch (error) {
    console.error(error)
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query

  if (!id) {
    res.status(400).json({ message: 'no id' })
    return
  }

  try {
    const response = await getProduct(Number(id))
    res.status(200).json({
      items: response,
      message: `Success to get products`,
    })
  } catch (error) {
    res.status(400).json({ message: `Failed to get items` })
  }
}
