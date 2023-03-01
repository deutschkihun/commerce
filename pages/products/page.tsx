import { categories, products } from '@prisma/client'
import React, { SetStateAction, useEffect, useState } from 'react'
import Image from 'next/image'
import { Pagination, SegmentedControl, Select } from '@mantine/core'
import { CATEGORY_MAP, FILTERS, take } from 'constants/products'
import { Input } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export default function Products() {
  const [activePage, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState<categories[]>([])
  const [value, setValue] = useState<string | undefined>('-1')
  const [products, setProducts] = useState<products[]>([])
  const [filter, setFilter] = useState<string | null>()
  const [keyword, setKeyword] = useState<string>('')

  useEffect(() => {
    fetch(`/api/get-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.items))
  }, [])

  useEffect(() => {
    fetch(`/api/get-products-count?category=${value}&contains=${keyword}`)
      .then((res) => res.json())
      .then((data) => setTotal(Math.ceil(data.items / take)))
  }, [keyword, value])

  useEffect(() => {
    const skip = take * (activePage - 1)
    fetch(
      `/api/get-products?skip=${skip}&take=${take}&category=${value}&orderBy=${filter}&contains=${keyword}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [activePage, value, filter, keyword])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <div className="px-36 mt-36 mb-36">
      <Input
        icon={<IconSearch />}
        placeholder="Your email"
        onChange={handleChange}
        value={keyword}
      />
      <div className="mb-4">
        <Select value={filter} onChange={setFilter} data={FILTERS} />
      </div>
      {categories && (
        <div className="mb-4">
          <SegmentedControl
            value={value}
            onChange={setValue}
            data={[
              { label: 'All', value: '-1' },
              ...categories.map((category) => ({
                label: category.name,
                value: category.id.toString(),
              })),
            ]}
            color="dark"
          />
        </div>
      )}
      {products && (
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
            <div key={item.id} style={{ maxWidth: 350 }}>
              <Image
                src={item.image_url ?? ''}
                alt={item.name}
                width={400}
                height={200}
                className="rounded"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              />
              <div className="flex">
                <span>{item.name}</span>
                <span className="ml-auto">
                  {item.price.toLocaleString('ko-kr')}원
                </span>
              </div>
              <span className="text-zinc-400">
                {CATEGORY_MAP[item.category_id - 1]}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex mt-5">
        <Pagination
          className="m-auto"
          page={activePage}
          onChange={setPage}
          total={total}
        />
      </div>
    </div>
  )
}
