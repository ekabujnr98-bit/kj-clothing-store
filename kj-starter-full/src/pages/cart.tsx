import Header from '../components/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function CartPage(){
  const [cart, setCart] = useState<any[]>([])
  useEffect(()=> {
    setCart(JSON.parse(localStorage.getItem('kj_cart') || '[]'))
  },[])
  const checkoutStripe = async () => {
    const items = cart.map(c=>({ name:c.name, unit_price: c.unit_price, quantity: c.quantity }))
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ items, successUrl: window.location.origin + '/success', cancelUrl: window.location.origin + '/cart' })
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else alert('Checkout error')
  }
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6">Cart</h1>
        {cart.length===0 && <p>Your cart is empty</p>}
        <div className="space-y-4">
          {cart.map((c,i)=>(
            <div key={i} className="flex items-center gap-4 border p-4 rounded">
              <img src={c.image} className="w-24 h-24 object-cover"/>
              <div>
                <div className="font-semibold">{c.name}</div>
                <div>₵{c.unit_price} x {c.quantity}</div>
              </div>
            </div>
          ))}
        </div>
        {cart.length>0 && <div className="mt-6">
          <button onClick={checkoutStripe} className="bg-brand-black text-white px-4 py-2">Checkout with Stripe</button>
        </div>}
      </main>
    </div>
  )
}
