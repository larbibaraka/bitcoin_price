import Navbar from "./Navbar";
import Head from 'next/head';
const Layout = (props) => (
   <div>
      <Head>
         <title>BitCoin Price</title>
         <link rel="stylesheet" 
            href="https://bootswatch.com/4/solar/bootstrap.min.css"
         />  
      </Head>
      <Navbar/> 
      {props.children}
   </div> 

    


);

export default Layout;