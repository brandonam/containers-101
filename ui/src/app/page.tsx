import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome to the Online Purchase System</h1>
        <nav>
          <Link href="/orders">Orders</Link> |
          <Link href="/customers">Customers</Link> |
          <Link href="/items">Items</Link> |
          <Link href="/employees">Employees</Link>
        </nav>
      </div>
    </main>
  )
}
