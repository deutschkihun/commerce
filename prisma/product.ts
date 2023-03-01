import { PrismaClient, Prisma } from '@prisma/client'
import Products from 'pages/products'

const prisma = new PrismaClient()

const productData: Prisma.productsCreateInput[] = Array.apply(
  null,
  Array(100)
).map((_, index) => ({
  name: `Item name ${index + 1}`,
  contents: `{"blocks":[{"key":"2u9lp","text":"first content2","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
  category_id: 1,
  image_url: `https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/${
    (index + 1) % 10 === 0 ? 10 : (index + 1) % 10
  }.jpg`,
  price: Math.floor(Math.random() * (1000000 - 20000) + 20000),
}))

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
