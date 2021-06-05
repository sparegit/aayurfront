import React,{Component} from "react";
import  CustomerService from "../services/customerService";

class AddCustomer extends Component{
  state={
    customerName:"",
    mobileNumber:"",
    emailId:"",
    customerPasssword:""
  }
  saveCustomer =(e) =>{
    e.preventDefault();
    let customer={customerName:this.state.customerName,mobileNumber:this.state.mobileNumber,emailId:this.state.emailId,customerPassword:this.state.customerPassword};
    console.log(`customer =>`+JSON.stringify(customer));
    CustomerService.addCustomer(customer).then(res =>{
      this.props.history.push(`/customers`);
    })
  }
changeCustomerNameHandler=(event) =>{
    this.setState({customerName: event.target.value})
}

changeMobileNumberHandler=(event) =>{
    this.setState({mobileNumber: event.target.value})
}

changeEmailHandler=(event) =>{
    this.setState({emailId: event.target.value})
}

changePasswordHandler=(event) =>{
    this.setState({customerPassword: event.target.value})
}

cancel(){
    this.props.history.push('/customers');
}
render() { 
  return (  
      <div>
          <div className="container">
              <div className="row">
                  <div className="caed col-md-6 offset-md-3 offset-md-3">
                      <h3 className="text-center">Add Customer</h3>
                      <div className="card-body">
                          <form>
                              <div className="form-group">
                                  <label>Name:</label>
                                  <input placeholder="name" name="Name" className="form-control" value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                              </div>
                              <div className="form-group">
                                  <label>Mobile Number:</label>
                                  <input placeholder="number" name="Number" className="form-control" value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}/>
                              </div>
                              <div className="form-group">
                                  <label>Email:</label>
                                  <input placeholder="Email" name="Email" className="form-control" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                              </div>
                              <div className="form-group">
                                  <label>Password:</label>
                                  <input placeholder="Password" name="Password" className="form-control" value={this.state.customerPasssword} onChange={this.changePasswordHandler}/>
                              </div>
                              <button className="btn btn-success" onClick={this.saveCustomer}> Save</button>
                              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>

                          </form>
                      
                      </div>
                  </div>
              </div>
          </div>

      </div>
  )
}
}

export default AddCustomer;




