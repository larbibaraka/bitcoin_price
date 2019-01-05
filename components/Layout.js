import Navbar from "./Navbar";
import Head from 'next/head';
class Layout extends React.Component {
   
   constructor(props){
      super(props);
      this.state = {
         currentTheme : 'https://bootswatch.com/4/flatly/bootstrap.min.css'
        
      }
   }

   ChangeTheme = (value) =>{
         this.setState({
            currentTheme : `https://bootswatch.com/4/${value}/bootstrap.min.css`
         })
   }
   
   
   render(){
      return (
         <div>
         <Head>
            <title>BitCoin Price</title>
            <link rel="stylesheet" 
               href={this.state.currentTheme}
            />  
         </Head>
         <Navbar ChangeTheme={this.ChangeTheme}/> 
         <div className="container">{this.props.children}</div>
      </div> 
      )
   }

}


 

export default Layout;