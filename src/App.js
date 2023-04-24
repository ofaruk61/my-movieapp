import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import NewMovieForm from "./components/NewMovieForm";
import MovieCard from "./components/MovieCard";


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/MoviesList" element={<MoviesList />} />
          <Route path="/MovieCard" element={<MovieCard />} />
          <Route path="/NewMovieForm" element={<NewMovieForm />} />
        </Routes>
    </Router>
  );
}

export default App;
