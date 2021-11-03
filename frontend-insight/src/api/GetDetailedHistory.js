import axios from "axios";

const getDetailedHistory = async (userID) => {
  const res = await axios.get(`http://localhost:8080/get/history/${userID}`);
      return res.data;
}

export default getDetailedHistory;