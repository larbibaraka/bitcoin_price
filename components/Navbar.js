import Link from 'next/link';
const Navbar = () => (
   <div>
      <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
      </ul>
   </div>
)

export default Navbar;