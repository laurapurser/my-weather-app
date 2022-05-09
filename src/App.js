import "./styles.css";
import Favourites from "./Favourites.js";
import SearchForm from "./SearchForm.js";
import SearchResults from "./SearchResults.js";
import SixDay from "./SixDay.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="container">
      <Favourites />
      <SearchForm />
      <SixDay />
      <Footer />
    </div>
  );
}
