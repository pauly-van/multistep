const AcctCreate = (props) =>(
  <div>
    <h1>Multi-Step Checkout</h1>
      <form>
        <fieldset>
          <legend>Create Account</legend>
          <label>Name:</label><br/>
          <input name='name' onChange={props.getData} type='text'/>
          <br/>
          <label>Email:</label><br/>
          <input name='email' onChange={props.getData} type='text'/>
          <br/>
          <label>Password:</label><br/>
          <input name='password' onChange={props.getData} type='password'/>
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
          <input name='address' onChange={props.getData} type='text'/>
          <br/>
          <label>City, State, Zip Code</label><br/>
          <input name='city' onChange={props.getData} type='text'/>
          <br/>
          <label>Phone Number</label><br/>
          <input name='phone' onChange={props.getData} type='number'/>
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
          <input name='credit' onChange={props.getData} type='number'/>
          <br/>
          <label>Expiry Date</label><br/>
          <input name='expiry' onChange={props.getData} type='number'/>
          <br/>
          <label>CCV</label><br/>
          <input name='ccv' onChange={props.getData} type='number'/>
          <br/>
          <label>Billing Zip Code</label><br/>
          <input name='billingZip' onChange={props.getData} type='number'/>
          <br/>
        </fieldset>
     </form>
  </div>
)

const Complete = (props) =>(
  <div>
    <h1>Multi-Step Checkout</h1>
    <h3>Transaction Complete!</h3>
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City, State, Zip</th>
        </tr>
        </thead>
        <tbody>
            <tr>
            <td>{props.data.name}</td>
            <td>{props.data.email}</td>
            <td>{props.data.number}</td>
            <td>{props.data.address}</td> 
            <td>{props.data.city_state_zipcode}</td>
            </tr>
        </tbody>
    </table>
  </div>
)

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPg: 'F1',
      name: '',
      password: '',
      email: '',
      address: '',
      city_state_zipcode: '',
      credit: '',
      expiry: '',
      CVV: '',
      billingZip: ''
    }
    this.getData = this.getData.bind(this);

  }

  getData({target}){
    this.setState({
      [target.name]: target.value
    })
  }
  
  changePage(){
    switch(this.state.currentPg){
        case 'F1':
          this.setState({
          currentPg: 'F2'
          });
          break;
        case 'F2':
          this.setState({
            currentPg: 'F3'
          });
          break;
        case 'F3':
          this.setState({
          currentPg: 'F4'
        })
         axios({
           url: 'http://localhost:3000',
           method: 'POST',
           data: this.state
         })
        break;
     }
  }

  render(){
    switch(this.state.currentPg){
      case 'F1':
        return(
          <div>
            <AcctCreate getData={this.getData}></AcctCreate>
            <button onClick={this.changePage.bind(this)}>Submit</button>
          </div>
        )
      case 'F2':
        return(
          <div>
            <Address getData={this.getData}></Address>
            <button onClick={this.changePage.bind(this)}>Submit</button>
          </div>
        )
      case 'F3':
        return(
          <div>
            <Billing getData={this.getData}></Billing>
            <button onClick={this.changePage.bind(this)}>Submit</button>
          </div>
        )
      case 'F4':
        return(
          <div>
            <Complete data={this.state}></Complete>
          </div>
        )
    }
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));