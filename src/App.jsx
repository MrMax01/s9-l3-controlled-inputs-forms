import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
// import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MyFooter /> */}
      <Welcome />
      <BookList books={fantasy} />
    </div>
  );
}

export default App;
