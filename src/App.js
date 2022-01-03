import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <div>
          <label for="title">Title&nbsp;:&nbsp;</label>
          <input type="text" name="title" />
        </div>
        <div>
          <label for="ingredients">Ingredients &nbsp;: &nbsp;</label>
          <input type="text" name="ingredients" />
        </div>

        <div>
          <label for="time">Time&nbsp;:&nbsp;</label>
          <input type="number" name="time" />
        </div>

        <div>
          <label for="image">Image&nbsp;:&nbsp;</label>
          <input type="text" name="image" />
        </div>

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
