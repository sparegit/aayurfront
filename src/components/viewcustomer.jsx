import React,{Component} from "react";
import customerService from "../services/customerService";

class ViewCustomer extends Component{
    constructor(props){
        super(props)
        this.state={
            customerId: this.props.match.params.customerId,
            customer:{}
        }
    }
    componentDidMount(){
        customerService.getCustomerById(this.state.customerId).then(res =>{
            this.setState({customer : res.data});
        })
    }
    render() { 
        return ( 
            <div className="card col-md-6 offset-md-3">
                <h3 className ="text-center"> View Customer Details</h3>
                <div className="card bg-info text-dark">
                <div className ="card-body">
                <h1>{this.props.match.params.customerId}</h1>
                    <div className ="row">
                        <label><b>Customer Name: </b></label>
                        <div>{this.state.customer.customerName}</div>
                    </div>
                    <div className ="row">
                        <label><b>Mobilenumber:</b> </label>
                        <div>{this.state.customer.mobileNumber}</div>
                    </div>
                    <div className ="row">
                        <label><b>EmailId: </b></label>
                        <div>{this.state.customer.emailId}</div>
                    </div>
                    <div className ="row">
                        <label><b>Password: </b></label>
                        <div>{this.state.customer.customerPassword}</div>
                    </div>
                        
                </div>

                </div>
            </div>
         )
    }
}
 
export default ViewCustomer;
