import { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personsService
      .getPersons()
      .then((initialPersons) => {
        setPersons(initialPersons);
      })
      .catch(() => alert(`Failed to get persons.  Please refresh page.`));
  }, []);

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
      <Filter
        search={search}
        handleSearchInputChange={handleSearchInputChange}
      />
      <h2>Add a new person</h2>
      <PersonForm
        newName={newName}
        handleNameInputChange={handleNameInputChange}
        newNumber={newNumber}
        handleNumberInputChange={handleNumberInputChange}
        addNewPerson={addNewPerson}
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
