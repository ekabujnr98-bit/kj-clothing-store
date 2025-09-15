import Header from '../components/Header'
export default function Success() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-2xl font-bold">Thank you — Order received</h1>
        <p>We have received your order. Check your email for confirmation.</p>
      </main>
    </div>
  )
}
