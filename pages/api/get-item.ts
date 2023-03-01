// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'
import dotenv from 'dotenv'
dotenv.config()

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID as string

async function getItems() {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'price',
        direction: 'ascending',
      },
    ],
  })
  return response
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await getItems()
    res.status(200).json({
      items: response.results,
      message: `Success to get items`,
    })
  } catch (error) {
    res.status(400).json({ message: `Failed to get items` })
  }
}
