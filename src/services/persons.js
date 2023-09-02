import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getPersons = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const exportedFunctions = {
  getPersons,
};

export default exportedFunctions;
