import React, { Component } from 'react';
import CustomerService from '../services/customerService';

class UpdateCustomer extends Component {

    constructor(props){
        super(props)
        this.state = {
            customerId:this.props.match.params.customerId,
            customerName:'',
            mobileNumber: '',
            emailId:'',
            customerPassword:''

        }
        this.changecustomerNameHandler=this.changecustomerNameHandler.bind(this);
        this.changemobileNumberHandler=this.changemobileNumberHandler.bind(this);
        this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
        this.changecustomerPasswordHandler=this.changecustomerPasswordHandler.bind(this);
        this.updateCustomer=this.updateCustomer.bind(this);
      
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.customerId).then((res) =>{
            let customer=res.data;
            this.setState({customerName:customer.customerName,mobileNumber:customer.mobileNumber,emailId:customer.emailId,customerPassword:customer.customerPassword

            });
        });
    }

    updateCustomer = (e) => {
        e.preventDefault();
        let customer={customerName: this.state.customerName, mobileNumber: this.state.mobileNumber,emailId: this.state.emailId,customerPassword: this.state.customerPassword};
        console.log('customer => '+ JSON.stringify(customer));

        CustomerService.updateCustomer(customer,this.state.customerId).then((res) => {
              this.props.history.push(`/customers`);
        });

    }

    changecustomerNameHandler=(event) =>{
        this.setState({customerName: event.target.value})
    }

    changemobileNumberHandler=(event) =>{
        this.setState({mobileNumber: event.target.value})
    }

    changeEmailIdHandler=(event) =>{
        this.setState({emailId: event.target.value})
    }

    changecustomerPasswordHandler=(event) =>{
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
                            <h3 className="text-center">Update Customer</h3>
                            <div className="card-body">
                                <form>
                                    <h1>{this.props.match.params.customerId}</h1>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input placeholder="customername" name="customerName" className="form-control" value={this.state.customerName} onChange={this.changecustomerNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>MobileNumber:</label>
                                        <input placeholder="mobilenumber" name="mobileNumber" className="form-control" value={this.state.mobileNumber} onChange={this.changemobileNumberHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input placeholder="emailid" name="EmailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input placeholder="customer password" name="customerPassword" className="form-control" value={this.state.customerPassword} onChange={this.changecustomerPasswordHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateCustomer}> Save</button>
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
 
export default UpdateCustomer;