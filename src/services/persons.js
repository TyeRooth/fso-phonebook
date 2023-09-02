import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getPersons = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addPerson = async (newPerson) => {
  const response = await axios.post(baseUrl, newPerson);
  return response.data;
};

const exportedFunctions = {
  getPersons,
  addPerson,
};

export default exportedFunctions;
