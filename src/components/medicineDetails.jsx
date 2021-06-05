import React, { Component } from "react";
import MedicineService from "../services/medicineService";

class MedicineDetails extends Component {
  state = {
    medicine: {
      medicineName: "",
      medicineCost: "",
      mfd: "",
      expiryDate: "",
      medicineQuantity: "",
    },
  };

  componentDidMount() {
    MedicineService.viewMedicine(this.props.match.params.id).then((res) =>
      this.setState({ medicine: res.data })
    );
  }

  handleChange = (event) => {
    event.preventDefault();
    const medicine = this.state.medicine;
    medicine[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ medicine });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.medicine);
    MedicineService.updateMedicine(
      this.props.match.params.id,
      this.state.medicine
    ).then((res) => {
      this.props.history.push("/medicine");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-75 mx-auto">
          <h1>{this.props.match.params.id}</h1>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Medicine Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="medicineName"
              value={this.state.medicine.medicineName}
              onChange={this.handleChange}
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
              id="date"
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
          <button type="submit" className="btn btn-primary float-right">
            Save
          </button>
          <button
            className="btn btn-secondary mr-2 float-right"
            onClick={() => {
              this.props.history.push("/medicine");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default MedicineDetails;
