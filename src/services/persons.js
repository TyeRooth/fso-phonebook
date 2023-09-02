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

const deletePerson = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

const updatePhone = async (id, updatedPerson) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedPerson);
  return response.data;
};

const exportedFunctions = {
  getPersons,
  addPerson,
  deletePerson,
  updatePhone,
};

export default exportedFunctions;
