import React, { Component } from "react";
import medicineService from "../services/medicineService";

class AddMedicine extends Component {
  state = {
    medicine: {
      medicineId: "",
      medicineName: "",
      medicineCost: "",
      mfd: "",
      expiryDate: "",
      medicineQuantity: "",
    },
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
    medicineService.addMedicine(this.state.medicine).then((res) => {
      this.props.history.push("/medicine");
    });
  };
  handleChange = (event) => {
    const medicine = { ...this.state.medicine };
    // dynamically handling event changes
    medicine[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ medicine });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
            <label htmlFor="medId" className="form-label">
              Medicine Id
            </label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="medicineId"
              value={this.state.medicine.medicineId}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="medName" className="form-label">
              Medicine Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="medicineName"
              value={this.state.medicine.medicineName}
              onChange={this.handleChange}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cost" className="form-label">
              Medicine Cost
            </label>
            <input
              type="text"
              className="form-control"
              id="cost"
              name="medicineCost"
              value={this.state.medicine.medicineCost}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Mfd
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="mfd"
              value={this.state.medicine.mfd}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exdate" className="form-label">
              Expiry Date
            </label>
            <input
              type="date"
              className="form-control"
              id="exdate"
              name="expiryDate"
              value={this.state.medicine.expiryDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quant" className="form-label">
              Medicine Quantity
            </label>
            <input
              type="text"
              className="form-control"
              id="quan"
              name="medicineQuantity"
              value={this.state.medicine.medicineQuantity}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddMedicine;
