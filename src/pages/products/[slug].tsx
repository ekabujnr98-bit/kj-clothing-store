import { useRouter } from 'next/router'
import Header from '../../components/Header'
import products from '../../../data/products.json'
import Image from 'next/image'
import { useState } from 'react'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query
  const product = products.find(p => p.slug === slug)
  const [qty, setQty] = useState(1)

  if (!product) return <div><Header /><main className="p-8">Product not found</main></div>

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('kj_cart') || '[]')
    cart.push({ id: product.id, name: product.name, unit_price: product.priceNum, quantity: qty, image: product.image })
    localStorage.setItem('kj_cart', JSON.stringify(cart))
    alert('Added to cart')
  }

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-96">
            <Image src={product.image} alt={product.name} fill style={{objectFit:'cover'}}/>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="mt-4 text-brand-gold text-xl">₵{product.price}</p>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <input type="number" value={qty} min={1} onChange={(e)=>setQty(Number(e.target.value))} className="w-20 p-2 border"/>
              <button onClick={addToCart} className="bg-brand-black text-white px-4 py-2">Add to cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
