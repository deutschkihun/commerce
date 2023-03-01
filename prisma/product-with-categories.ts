import { PrismaClient, Prisma } from '@prisma/client'
import Products from 'pages/products'

const prisma = new PrismaClient()

const sneakers = [
  {
    name: 'sneakers1',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_640/3cc96f43-47b6-43cb-951d-d8f73bb2f912/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 'sneakers2',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_640/3cc96f43-47b6-43cb-951d-d8f73bb2f912/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 'sneakers3',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 1,
    image_url:
      'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_640/3cc96f43-47b6-43cb-951d-d8f73bb2f912/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-TttlGpDb.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
]

const tShirt = [
  {
    name: 't-shirt1',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b3bdde8b-faf2-42d9-ab20-0972cb57b187/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%82%A8%EC%84%B1-%ED%8B%B0%EC%85%94%EC%B8%A0-RufA5kao.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 't-shirt2',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b3bdde8b-faf2-42d9-ab20-0972cb57b187/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%82%A8%EC%84%B1-%ED%8B%B0%EC%85%94%EC%B8%A0-RufA5kao.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 't-shirt3',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 2,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/b3bdde8b-faf2-42d9-ab20-0972cb57b187/%EC%8A%A4%ED%8F%AC%EC%B8%A0%EC%9B%A8%EC%96%B4-%EB%82%A8%EC%84%B1-%ED%8B%B0%EC%85%94%EC%B8%A0-RufA5kao.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
]

const pants = [
  {
    name: 'pants1',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/10b23525-98b8-456d-99db-7be8acd70d42/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 'pants2',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/10b23525-98b8-456d-99db-7be8acd70d42/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 'pants3',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 3,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/10b23525-98b8-456d-99db-7be8acd70d42/acg-%EC%8A%A4%EB%AF%B8%EC%8A%A4-%EC%84%9C%EB%B0%8B-%EB%82%A8%EC%84%B1-%EC%B9%B4%EA%B3%A0-%ED%8C%AC%EC%B8%A0-157pudBS.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
]

const cap = [
  {
    name: 'cap1',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/15bc76c1-52c2-4331-a8a8-9b80219766c8/%EB%A0%88%EA%B1%B0%EC%8B%9C91-%EA%B3%A8%ED%94%84-%EB%AA%A8%EC%9E%90-ec5v66Pg.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 'cap2',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/15bc76c1-52c2-4331-a8a8-9b80219766c8/%EB%A0%88%EA%B1%B0%EC%8B%9C91-%EA%B3%A8%ED%94%84-%EB%AA%A8%EC%9E%90-ec5v66Pg.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 'cap3',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 4,
    image_url:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/15bc76c1-52c2-4331-a8a8-9b80219766c8/%EB%A0%88%EA%B1%B0%EC%8B%9C91-%EA%B3%A8%ED%94%84-%EB%AA%A8%EC%9E%90-ec5v66Pg.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
]

const hoodie = [
  {
    name: 'hoodie1',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/913c65bc-8162-4ccc-9be4-ed2c3db3abb9/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%9B%84%EB%94%94-2YVQQZCQ.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 'hoodie2',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/913c65bc-8162-4ccc-9be4-ed2c3db3abb9/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%9B%84%EB%94%94-2YVQQZCQ.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
  {
    name: 'hoodie3',
    contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
    category_id: 5,
    image_url:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/913c65bc-8162-4ccc-9be4-ed2c3db3abb9/%EC%86%94%EB%A1%9C-%EC%8A%A4%EC%9A%B0%EC%8B%9C-%EB%82%A8%EC%84%B1-%ED%94%8C%EB%A6%AC%EC%8A%A4-%ED%9B%84%EB%94%94-2YVQQZCQ.png',
    price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
  },
]

const productData: Prisma.productsCreateInput[] = [
  ...sneakers,
  ...tShirt,
  ...pants,
  ...cap,
  ...hoodie,
]

async function main() {
  await prisma.products.deleteMany()
  for (const data of productData) {
    const product = await prisma.products.create({
      data,
    })
    console.log(`Created id ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
