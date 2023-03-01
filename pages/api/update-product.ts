// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateProduct(id: number, contents: string) {
  try {
    return await prisma.products.update({
      where: { id },
      data: {
        contents,
      },
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
  const { id, contents } = JSON.parse(req.body)

  if (!id || !contents) {
    res.status(400).json({ message: 'no data' })
    return
  }

  try {
    const products = await updateProduct(Number(id), contents)
    res.status(200).json({
      items: products,
      message: `Success to update product`,
    })
  } catch (error) {
    res.status(400).json({ message: `Failed to update product` })
  }
}
