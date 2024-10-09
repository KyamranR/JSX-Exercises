const App = () => (
  <div>
    <Tweet
      username="@john_doe"
      name="John Doe"
      date="Oct 2, 2024"
      message="Just posted my first React app!"
    />
    <Tweet
      username="@jane_smith"
      name="Jane Smith"
      date="Oct 3, 2024"
      message="Loving the weather today!"
    />
    <Tweet
      username="@dev_guy"
      name="Dev Guy"
      date="Oct 4, 2024"
      message="Coding all day, everyday!"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
