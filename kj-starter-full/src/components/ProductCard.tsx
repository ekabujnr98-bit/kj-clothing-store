import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }: any) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="relative h-64">
        <Image src={product.image} alt={product.name} fill style={{objectFit:'cover'}}/>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800">{product.name}</h3>
        <p className="mt-2 text-brand-gold font-bold">{product.price}</p>
        <Link href={`/products/${product.slug}`}>
          <a className="mt-4 inline-block text-sm text-gray-600">View</a>
        </Link>
      </div>
    </div>
  )
}
