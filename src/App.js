import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "123456789" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const nameInPhonebook = () => {
    return persons.find((person) => person.name === newName);
  };

  const addNewPerson = (e) => {
    e.preventDefault();
    if (nameInPhonebook()) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      name: newName,
      phone: newNumber,
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(e) => addNewPerson(e)}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => handleNameInputChange(e)} />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(e) => handleNumberInputChange(e)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name} {person.phone}</p>
      ))}
    </div>
  );
};

export default App;
