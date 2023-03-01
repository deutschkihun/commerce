import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/react'
import Button from '@components/Button'

const inter = Inter({ subsets: ['latin'] })

//interface ItemInfo {
//  id: string
//  properties: {
//    id: string
//  }[]
//}

interface ProductsInfo {
  id: string
  name: string
  createdAt: string
}

export default function Home() {
  // notion
  //const [products, setProducts] = useState<ItemInfo[]>([])
  //useEffect(() => {
  //  fetch('/api/get-item')
  //    .then((res) => res.json())
  //    .then((data) => setProducts(data.items))
  //}, [])

  const [products, setProducts] = useState<ProductsInfo[]>([])
  useEffect(() => {
    fetch('/api/get-products')
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [])

  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = async () => {
    if (inputRef.current?.value === '' || !inputRef.current)
      alert('please insert name')

    fetch(`api/addItem?name=${inputRef.current?.value}`)
      .then((res) => res.json())
      .then((data) => alert(data.message))
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <input
          ref={inputRef}
          className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-96"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />

        <Button onClick={handleClick}>add item</Button>

        <div>
          <h2 className={inter.className}>product list</h2>
          {/* real db */}
          {products &&
            products.map((product) => (
              <div key={product.id}>
                <span>
                  {product.name}: {product.createdAt}
                </span>
              </div>
            ))}

          {/* notion */}
          {/*{products &&
            products.map((item) => (
              <div key={item.id}>
                {JSON.stringify(item)}
                {Object.entries(item.properties).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => {
                      fetch(
                        `api/get-detail?pageId=${item.id}&propertyId=${value.id}`
                      )
                        .then((res) => res.json())
                        .then((data) => alert(JSON.stringify(data.detail)))
                    }}
                  >
                    {key}
                  </button>
                ))}
              </div>
            ))}*/}
        </div>
      </main>
    </>
  )
}
