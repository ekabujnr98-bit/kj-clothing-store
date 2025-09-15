import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import products from '../../data/products.json'

export default function Home() {
  const sampleProducts = products.slice(0,3)
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Featured</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map(p => (
              <ProductCard key={p.id} product={p}/>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
