import React from 'react'
import { useSelector, useDispatch } from "react-redux";
function OrderAdmin() {
    const isAdmin = useSelector((state) => state.user.isAdmin);
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
              //        value={}
             //         onChange={}
                    />
                  </div>
                  <div className="form-group">
                    <label>Total Amount:</label>
                    <input
                      placeholder="totalAmount"
                      name="totalAmount"
                      className="form-control"
                //      value={}
                //      onChange={}
                    />
                  </div>
                  <div className="form-group">
                    <label>Order Date:</label>
                    <input
                      placeholder="orderDate"
                      name="orderDate"
                      className="form-control"
                //      value={}
                //      onChange={}
                    />
                  </div>
                  <div className="form-group">
                    <label>Status:</label>
                    <input
                      placeholder="Status"
                      name="Status"
                      className="form-control"
                 //     value={}
                 //     onChange={}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                //    onClick={}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                 //   onClick={}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
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

