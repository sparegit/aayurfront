import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from "react-redux";
function OrderAdmin() {
    const isAdmin = useSelector((state) => state.user.isAdmin);
const [order,setOrder] = useState({
    orderId:'',
    status:'',
})
const handleSubmit=()=>{
const res=  axios.patch(`http://localhost:8080/order/update/${order.orderId}`,order).then(res=>{
    console.log(res)
  }).catch(err=>{
    console.error(err)
  })
  console.log(order)
  console.log(res)
}
    if(isAdmin){
        return (
            <div>
                 <div>
        <div className="container">
          <div className="row">
            <div className="caed col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Order</h3>
              <div className="card-body">
                <form>
                  <h1>{}</h1>
                  <div className="form-group">
                    <label>Order No.:</label>
                    <input
                      placeholder="orderNo"
                      name="orderNo"
                      className="form-control"
                     onChange={(e) =>
                      setOrder({ ...order, orderId: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Status:</label>
                    <input
                      placeholder="Status"
                      name="Status"
                      className="form-control"
                      value={order.status}
                      onChange={(e) =>
                        setOrder({ ...order, status: e.target.value })}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
                
            </div>
        )
    }
  return(
      <div>
          <h1>access denied</h1>
      </div>
  )
}

export default OrderAdmin

