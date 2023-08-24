import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const nameInPhonebook = () => {
    return persons.find(person => person.name === newName)
  }

  const addNewName = (e) => {
    e.preventDefault();
    if (nameInPhonebook()) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName,
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(e) => addNewName(e)}>
        <div>
          name:{" "}
          <input value={newName} onChange={(e) => handleNameInputChange(e)} />
        </div>
        <div>
          <button type="submit">
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
