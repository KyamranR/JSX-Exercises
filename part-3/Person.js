const Person = ({ name, age, hobbies }) => {
  const displayName = name.length > 8 ? name.slice(0, 6) + "..." : name;

  return (
    <div>
      <p>Learn some information about this person.</p>
      <h2>{displayName}</h2>
      <h3>Age: {age}</h3>

      {age >= 18 ? <h3>Please go vote!</h3> : <h3>You must be 18</h3>}

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
