const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  )
};

export default Persons;
