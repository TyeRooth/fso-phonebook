import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const handleSearchInputChange = (event) => {
    setSearch(event.target.value);
  };

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

  const allSearchCharsInName = (name) => {
    return search
      .toLowerCase()
      .split("")
      .every((char) => name.toLowerCase().includes(char));
  };

  const filteredPersons = search
    ? persons.filter((person) => allSearchCharsInName(person.name))
    : persons;

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        Filter shown with:
        <input value={search} onChange={(e) => handleSearchInputChange(e)} />
      </div>
      <h2>Add a new person</h2>
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
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  );
};

export default App;
