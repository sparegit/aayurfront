import React, { Component } from "react";
import MedicineService from "../services/medicineService";
import { Link } from "react-router-dom";
import _ from "lodash";

class Medicine extends Component {
  state = {
    medicines: [],
    sortColumn: { path: "title", order: "asc" },
    search: "",
    medicine: {
      medicineId: "",
      medicineCost: "",
      mfd: "",
      expiryDate: "",
      medicineQuantity: "",
    },
  };
  componentDidMount() {
    MedicineService.showAllMedicine().then((res) => {
      console.log("data: ", res.data);
      this.setState({ medicines: res.data });
    });
    console.log("medicines: ", this.state.medicines);
  }

  deleteMedicine = (id) => {
    console.log("Delete medicine with id: " + id);
    const medicines = this.state.medicines.filter(
      (medicine) => medicine.medicineId !== id
    );
    this.setState({ medicines });
    MedicineService.deleteMedicine(id);
  };

  viewMedicine = () => {
    let medicines = [];
    MedicineService.viewMedicine(this.state.search).then((res) => {
      console.log("**data: ", res.data);
      medicines = res.data;
    });
    this.setState({ medicines });
    console.log("** viewMedicine" + this.state.medicine);
  };

  handleSort = (path) => {
    console.log(path);
    this.setState({ sortColumn: { path, order: "asc" } });
  };

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, sortColumn, medicines } = this.state;
    var sorted = [];
    if (search) {
      sorted = medicines.filter((medicine) => medicine.medicineId === search);
    } else {
      sorted = _.orderBy(
        this.state.medicines,
        [sortColumn.path], 
        [sortColumn.order]
        );
    }
    console.log(this.state.medicines);
    console.log("Sorted..", sorted);
    return (
      <div className="w-75 mt-5 mx-auto">
        <div className="d-flex justify-content-between">
          <Link to="/medicine/add" className="btn btn-secondary btn-large mb-1">
            Add
          </Link>
          <form class="form-inline my-2 my-lg-0">
            <input
              className="form-control ml-auto"
              type="search"
              placeholder="Search by Id"
              aria-label="Search"
              onChange={this.onChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="button"
              onClick={this.viewMedicine}
            >
              Search
            </button>
          </form>
        </div>

        <table className="table mt-3">
          <thead className="table-dark">
            <tr>
              <th onClick={() => this.handleSort("medicineName")}>
                MedicineName
              </th>
              <th onClick={() => this.handleSort("medicineCost")}>
                MedicineCost
              </th>
              <th onClick={() => this.handleSort("mfd")}>mfd</th>
              <th onClick={() => this.handleSort("expiryDate")}>
                MedicineExpiryDate
              </th>
              <th onClick={() => this.handleSort("medicineQuantity")}>
                MedicineQuantity
              </th>
              <th colSpan="4">Action</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((medicine) => (
              <tr key={medicine.medicineId}>
                <td>{medicine.medicineName} </td>
                <td>{medicine.medicineCost}</td>
                <td>{medicine.mfd}</td>
                <td>{medicine.expiryDate}</td>
                <td>{medicine.medicineQuantity}</td>
                <td>
                  <Link to={`/medicine/update/${medicine.medicineId}`}>
                    <button className="btn btn-secondary">Update</button>
                  </Link>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => this.deleteMedicine(medicine.medicineId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Medicine;
