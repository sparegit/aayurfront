import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Medicine from "./components/medicine";
import AddMedicine from "./components/addMedicine";
/*import PageNotFound from "./components/pageNotFound";*/
import MedicineDetails from "./components/medicineDetails";
function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <Switch>
          <Route path="/medicine/add" component={AddMedicine} />
          <Route path="/medicine/update/:id" component={MedicineDetails} />
          <Route path="/medicine/view/:id" component={MedicineDetails} />
          <Route path="/medicine" component={Medicine} />
          <Route path="/" exact component={Home} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
