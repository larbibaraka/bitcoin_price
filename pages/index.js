import Link from 'next/link';

const Index  = () => (
  <div>
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
    </ul>
    <h1>Welcome to bitcoinPrice App </h1>
  </div>
);


export default Index;
