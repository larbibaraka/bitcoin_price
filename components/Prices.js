class Prices extends React.Component{

 

    state = {
      currency : 'USD'
    }
  

    onChange = (e) =>{
     this.setState({
       currency : e.target.value
     })
    }




    
    render(){
    let list = '';
      if(this.state.currency === 'USD'){
        list = <li className="list-group-item">
        Bitcoin rate for {this.props.bpi.USD.description}
        : <span className="badge badge-info">
        {this.props.bpi.USD.rate} 
        </span>
      </li>
      }else if(this.state.currency === 'GBP'){
        list = <li className="list-group-item">
        Bitcoin rate for {this.props.bpi.GBP.description}
        : <span className="badge badge-info">
        {this.props.bpi.GBP.rate} 
        </span>
      </li>
      }else if(this.state.currency === 'EUR'){
        list = <li className="list-group-item">
        Bitcoin rate for {this.props.bpi.EUR.description}
        : <span className="badge badge-info">
        {this.props.bpi.EUR.rate} 
        </span>
      </li>
      }

    return (
          <div>
            <p>chose a currency : </p>
            
            <ul className="list-group">
              {list}
            </ul>
            <br/>
            <select className="form-control" onChange={this.onChange}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
            </select>
          </div>
        )
      }
   
  
}

export default Prices;
