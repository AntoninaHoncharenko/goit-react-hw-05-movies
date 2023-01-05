export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    if (event.currentTarget.elements.query.value === '') {
      event.currentTarget.reset();
      return;
    }
    onSubmit(event.currentTarget.elements.query.value);
    event.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
