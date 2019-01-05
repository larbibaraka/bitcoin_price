import Layout from '../components/Layout';
import Prices from '../components/Prices';
import Fetch  from 'isomorphic-unfetch';
const Index  = (props) => (
  <Layout>
    <div>
    <h1>Welcome to bitcoinPrice App </h1>
    <Prices bpi={props.bpi}/> 
    </div>
  </Layout>
);

Index.getInitialProps  = async function () {
    //specify the route url 
    const url  = "https://api.coindesk.com/v1/bpi/currentprice.json";
    //create the resolver
    const res = await fetch(url);
    //getting the result
    const data = await res.json();

    return {
      bpi :  data.bpi
    }
}

export default Index;
