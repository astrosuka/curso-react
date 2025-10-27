import './Item.css'

export default function Item({ item }) {
  console.log(item)
  return (
    <div className='card'>
      {item.images[0] && <img src={item.images[0]} />}
      {item.title}
    </div>
  )
}
