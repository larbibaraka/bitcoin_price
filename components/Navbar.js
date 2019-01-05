import Link from 'next/link';
class Navbar extends React.Component {

   constructor(props){
      super(props);
   }

   onChange = (e) =>{
      const value = e.target.value;
      this.props.ChangeTheme(value);
      
   }


   render(){
      return(
         <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                  <a className="navbar-brand" href="#">BitCoin Price</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarColor01">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                           <Link href="/about"><a className="nav-link" >About</a></Link>
                        </li>
                        <li>
                           <select className="form-control float-right" onChange={this.onChange.bind(this)}>
                                 <option>-select a theme-</option>
                                 <option value="cerulean">Cerulean</option>
                                 <option value="cosmo">Cosmo</option>
                                 <option value="cyborg">Cyborg</option>
                                 <option value="darkly">Darkly</option>
                                 <option value="flatly">Flatly</option>
                                 <option value="journal">Journal</option>
                                 <option value="litera">Litera</option>
                                 <option value="lumen">Lumen</option>
                                 <option value="lux">Lux</option>
                                 <option value="materia">Materia</option>
                                 <option value="pulse">Pulse</option>
                                 <option value="sandstone">Sandstone</option>
                                 <option value="simplex">Simplex</option>
                                 <option value="sketchy">Sketchy</option>
                                 <option value="slate">Slate</option>
                                 <option value="solar">Solar</option>
                                 <option value="spacelab">Spacelab</option>
                                 <option value="superhero">Superhero</option>
                                 <option value="united">United</option>
                                 <option value="yeti">Yeti</option>
                           </select>
                        </li>

                     </ul>
                  </div>
                  </nav>
            </div>
   
      )
   }

}
export default Navbar;