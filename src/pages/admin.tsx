import Header from '../components/Header'
import products from '../../data/products.json'

export default function AdminMock() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Admin (Mockup)</h1>
        <p className="mb-6">This is a read-only admin mockup. For production, implement authentication and a CMS.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map(p=>(
            <div key={p.id} className="border p-4 rounded">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm">Price: ₵{p.price}</div>
              <div className="text-sm">Slug: {p.slug}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
