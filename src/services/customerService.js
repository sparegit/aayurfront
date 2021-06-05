import axios from "axios";

const CUSTOMER_API_BASE_URL ="http://localhost:8082/api/customer";

class CustomerService{
    async getAllCustomers(){
        return await axios.get(CUSTOMER_API_BASE_URL);
    }
    async deleteCustomer(customerId) {
        return await axios.delete(CUSTOMER_API_BASE_URL + "/"+customerId);
      }
      async getCustomerById(customerId){
          return await axios.get(CUSTOMER_API_BASE_URL+"/"+customerId);
      }
      async addCustomer(customer){
          return await axios.post(CUSTOMER_API_BASE_URL,customer);  
      }
      async updateCustomer(customer,customerId){
        return await axios.put(CUSTOMER_API_BASE_URL + '/'+customerId,customer);
      }


   
}
export default new CustomerService();