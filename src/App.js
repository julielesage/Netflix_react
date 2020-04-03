import React from "react";
import "./App.css";
import Logo from "./logo-netflix.png";
import CategorySection from "./components/CategorySection";
import MoviesList from "./data.json";

function App() {
  return (
    <>
      <header>
        <img className="logo" alt="logo-netflix" src={Logo} />
      </header>

      {MoviesList.map((category, i) => {
        return (
          <CategorySection
            key={i}
            category={category.category}
            images={category.images}
          />
        );
      })}
    </>
  );
}

export default App;
