const AcctCreate = (props) =>(
  <div>
    <h1>Multi-Step Checkout</h1>
      <form>
        <fieldset>
          <legend>Create Account</legend>
          <label>Name:</label><br/>
          <input type='text'/>
          <br/>
          <label>Email:</label><br/>
          <input type='text'/>
          <br/>
          <label>Password:</label><br/>
          <input type='password'/>
          <br/>
        </fieldset>
     </form>
  </div>
)

const Address = (props) => (
  <div>
    <h1>Multi-Step Checkout</h1>
      <form>
        <fieldset>
          <legend>Address Information</legend>
          <label>Address</label><br/>
          <input type='text'/>
          <br/>
          <label>City, State, Zip Code</label><br/>
          <input type='text'/>
          <br/>
          <label>Phone Number</label><br/>
          <input type='number'/>
          <br/>
        </fieldset>
     </form>
  </div>
)

const Billing = (props) => (
  <div>
    <h1>Multi-Step Checkout</h1>
      <form>
        <fieldset>
          <legend>Billing Information</legend>
          <label>Credit Card Number</label><br/>
          <input type='number'/>
          <br/>
          <label>Expiry Date</label><br/>
          <input type='number'/>
          <br/>
          <label>Billing Zip Code</label><br/>
          <input type='number'/>
          <br/>
        </fieldset>
     </form>
  </div>
)

const Complete = () =>(
  <div>
    <h1>Multi-Step Checkout</h1>
    <h3>Transaction Complete!</h3>
  </div>
)

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPg: 'F1'
    }
  }
  
  changePage(){
    if(this.state.currentPg==='F1'){
      this.setState({
        currentPg: 'F2'
      })
    }else if(this.state.currentPg==='F2'){
      this.setState({
        currentPg: 'F3'
      })
    }else{
      this.setState({
        currentPg: 'F4'
      })
    }
  }

  render(){
    switch(this.state.currentPg){
      case 'F1':
        return(
          <div>
            <AcctCreate></AcctCreate>
            <button onClick={this.changePage.bind(this)}>Submit</button>
          </div>
        )
      case 'F2':
        return(
          <div>
            <Address></Address>
            <button onClick={this.changePage.bind(this)}>Submit</button>
          </div>
        )
      case 'F3':
        return(
          <div>
            <Billing></Billing>
            <button onClick={this.changePage.bind(this)}>Submit</button>
          </div>
        )
      case 'F4':
        return(
          <div>
            <Complete></Complete>
          </div>
        )
    }
      // if(this.state.currentPg==='F1'){
      // }else if(this.state.currentPg==='F2'){
      // }else if(this.state.currentPg==='F3'){
      // }else
  }
};


ReactDOM.render(<App/>, document.getElementById('app'));