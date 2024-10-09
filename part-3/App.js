const App = () => (
  <div>
    <Person
      name="Christopher"
      age={21}
      hobbies={["Reading", "Gaming", "Swimming"]}
    />
    <Person name="Sarah" age={17} hobbies={["Dancing", "Singing"]} />
    <Person
      name="Alexander"
      age={25}
      hobbies={["Traveling", "Photography", "Cooking"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
