const Tweet = ({ username, name, date, message }) => {
  return (
    <div className="card bg-info mb-3">
      <h1 className="card-title">{username}</h1>
      <h3>{name}</h3>
      <span>Date: {date}</span>
      <p className="card-text">Message: {message}</p>
    </div>
  );
};
