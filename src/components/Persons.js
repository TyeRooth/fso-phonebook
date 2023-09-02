const Persons = ({ filteredPersons, handlePersonDelete }) => {
  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.phone}{" "}
          <button onClick={() => handlePersonDelete(person.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
