import React,{Component} from "react";
import CustomerService from "../services/customerService";

class Customer extends Component{
    constructor(props){
        super(props)
    this.state={
        customers:[]    
    }
    this.addCustomer = this.addCustomer.bind(this);
    this.viewCustomer = this.viewCustomer.bind(this);
    this.updateCustomer=this.updateCustomer.bind(this);
}
    componentDidMount(){
        CustomerService.getAllCustomers().then((res)=>{
            console.log("data:",res.data);
            this.setState({customers:res.data});
        });
        console.log("customers:",this.state.customers);
    }

    deleteCustomer(customerId){
        CustomerService.deleteCustomer(customerId).then(res=>{
            this.setState({customers: this.state.customers.filter(customer => customer.customerId !== customerId)});
        });
    }
    addCustomer(){
        this.props.history.push('/add-customer');
    }

    viewCustomer(customerId){
        this.props.history.push(`/view-customers/${customerId}`);
    }
    
    updateCustomer(customerId){
        this.props.history.push(`/update-customers/${customerId}`);
    }


render() {
    return(
        <div>
           <h2 className="text-center">List of Customers</h2>
                <div className="row">
                <button className="btn btn-info" onClick={this.addCustomer}>Add Customer</button>
                    <table className="table table-striped table-bordered" style={{marginLeft:"100px"}}>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Customer Mobile Number</th>
                            <th>Customer Email Id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(
                                customer =>
                                <tr key ={customer.customerId}>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.mobileNumber}</td>
                                    <td>{customer.emailId}</td>
                                    <td>
                                        <button onClick={() => this.deleteCustomer(customer.customerId)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.viewCustomer(customer.customerId)} className="btn btn-primary">View</button>
                                        <button  style={{marginLeft:"10px"}} onClick = { () => this.updateCustomer(customer.customerId)} className="btn btn-secondary">Update</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
            </div>
    );
}
}

export default Customer