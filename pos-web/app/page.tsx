
import Link from 'next/link';
export default function Home() {
  return (<main className="container"><h1>EzySync POS</h1><ul>
    <li><Link href="/login">PIN Login</Link></li>
    <li><Link href="/pos">Billing</Link></li>
    <li><Link href="/menu">Menu</Link></li>
    <li><Link href="/reports">Reports</Link></li>
  </ul></main>);
}
