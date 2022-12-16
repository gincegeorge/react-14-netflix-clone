import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { originals,action,trending,horrorMovies,romanceMovies,documentaries,comedyMovies} from "./constants/urls";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost title="Netflix originals" url={originals} />
      <RowPost title="Action" isSmall backdropImages url={action} />
      <RowPost title="Trending" isSmall backdropImages url={trending} />
      <RowPost title="Horror" backdropImages url={horrorMovies } />
      <RowPost title="Romance" isSmall backdropImages url={romanceMovies} />
      <RowPost title="Documentaries" isSmall backdropImages url={documentaries} />
      <RowPost title="Comedy" isSmall backdropImages url={comedyMovies} />

    </div>
  );
}

export default App;
