import axios from "axios";

const MEDICINE_API_BASE_URL = "http://localhost:8082/medicine";

class MedicineService {
  async showAllMedicine() {
    //return await axios.get(MEDICINE_API_BASE_URL + "/all");
    return await axios.get(MEDICINE_API_BASE_URL);
  }

  async addMedicine(medicine) {
    //return await axios.post(MEDICINE_API_BASE_URL + "/add", medicine);
    return await axios.post(MEDICINE_API_BASE_URL, medicine);
  }

  async viewMedicine(medicineId) {
    return await axios.get(MEDICINE_API_BASE_URL + "/id/" + medicineId);
  }

  async updateMedicine(medicineId, medicine) {
    return await axios.put(MEDICINE_API_BASE_URL + "/" + medicineId, medicine);
  }

  async deleteMedicine(medicineId) {
    return await axios.delete(MEDICINE_API_BASE_URL + "/" + medicineId);
  }
}
export default new MedicineService();
