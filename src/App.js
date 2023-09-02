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
      .catch((error) => alert(`Failed to get persons.  Please refresh page.`));
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

  const updatePhoneForPerson = (newPerson) => {
    if (
      window.confirm(
        `${newPerson.name} is already added to the phonebook, replace the old number with a new one?`
      )
    ) {
      const personToUpdate = persons.find((person) => person.name === newName);
      const updatedPerson = { ...personToUpdate, phone: newNumber };
      personsService
        .updatePhone(personToUpdate.id, updatedPerson)
        .then((updatedPerson) => {
          setPersons(
            persons.map((person) => {
              return person.id !== updatedPerson.id ? person : updatedPerson;
            })
          );
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => alert(`Failed to update number for person.`));
    }
  };

  const addNewPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      phone: newNumber,
    };
    if (nameInPhonebook()) {
      updatePhoneForPerson(newPerson)
      return
    }
    personsService
      .addPerson(newPerson)
      .then((postedPerson) => {
        setPersons(persons.concat(postedPerson));
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => alert(`Failed to add person.  Please try again.`));
  };

  const handlePersonDelete = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name}`)) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          alert(`Failed to delete person.  Please try again.`);
        });
    }
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
      <Persons
        filteredPersons={filteredPersons}
        handlePersonDelete={handlePersonDelete}
      />
    </div>
  );
};

export default App;
