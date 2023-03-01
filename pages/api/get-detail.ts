// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'
import dotenv from 'dotenv'
import { GetPagePropertyResponse } from '@notionhq/client/build/src/api-endpoints'
dotenv.config()

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID as string

async function getDetail(pageId: string, propertyId: string) {
  const response = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: propertyId,
  })

  return response
}

type Data = {
  detail?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { pageId, propertyId } = req.query
    const response = await getDetail(pageId as string, propertyId as string)
    res.status(200).json({
      detail: response,
      message: `Success to get items`,
    })
  } catch (error) {
    res.status(400).json({ message: `Failed to get items` })
  }
}
