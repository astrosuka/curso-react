import { useState, useEffect } from 'react'
import Item from '../../components/Item'
import './Products.css'

export default function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setData(data.products))
      .catch(error => console.log(error))
  }, [])

  if (!data) return <div>Loading</div>
  return (
    <section className='products'>
      <h2>Productos</h2>
      <div className='products-grid'>
        {data?.map((i) => {
          return <Item key={i.id} item={i} />

        })}

      </div>
    </section>

  )
}
