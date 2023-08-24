const PersonForm = ({
  newName,
  handleNameInputChange,
  newNumber,
  handleNumberInputChange,
  addNewPerson,
}) => {
  return (
    <form onSubmit={(e) => addNewPerson(e)}>
      <div>
        name:{" "}
        <input value={newName} onChange={(e) => handleNameInputChange(e)} />
      </div>
      <div>
        number:{" "}
        <input value={newNumber} onChange={(e) => handleNumberInputChange(e)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
