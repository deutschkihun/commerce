// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function getProductsCount(category: number, contains: string) {
  //const containsCondition = contains
  //  ? {
  //      name: { contains },
  //    }
  //  : undefined
  //const where =
  //  category && category !== -1
  //    ? {
  //        category_id: category,
  //        ...containsCondition
  //      }
  //    : {}

  const where = {
    category_id: category && category !== -1 ? category : undefined,
    name: { contains: contains ?? '' },
  }

  try {
    return await prisma.products.count({
      where,
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
  const { category, contains } = req.query

  try {
    const products = await getProductsCount(Number(category), String(contains))
    res.status(200).json({
      items: products,
      message: `Success to get products`,
    })
  } catch (error) {
    res.status(400).json({ message: `Failed to get items` })
  }
}
