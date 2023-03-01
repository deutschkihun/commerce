// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { getOrderBy } from 'constants/products'

const prisma = new PrismaClient()

async function getProducts(
  skip: number,
  take: number,
  category: number,
  orderBy: string
) {
  const where =
    category && category !== -1
      ? {
          category_id: category,
        }
      : {}
  try {
    return await prisma.products.findMany({
      skip,
      take,
      where,
      ...getOrderBy(orderBy),
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
  const { skip, take, category, orderBy, contains } = req.query
  if (!skip || !take) {
    res.status(400).json({ message: 'no skip or no take' })
    return
  }

  try {
    const products = await getProducts(
      Number(skip),
      Number(take),
      Number(category),
      String(orderBy)
    )
    res.status(200).json({
      items: products,
      message: `Success to get products`,
    })
  } catch (error) {
    res.status(400).json({ message: `Failed to get items` })
  }
}
