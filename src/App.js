import React, { Component } from "react";
import "./styles.css";
import Card from "./Card";
import Select from "./Select";
class App extends Component {
  state = {
    data: [
      {
        Title: "Captain Marvel",
        Year: "2019",
        Rated: "PG-13",
        Released: "08 Mar 2019",
        Runtime: "123 min",
        Genre: "Action, Adventure, Sci-Fi",
        Director: "Anna Boden, Ryan Fleck",
        Writer:
          "Anna Boden (screenplay by), Ryan Fleck (screenplay by), Geneva Robertson-Dworet (screenplay by), Nicole Perlman (story by), Meg LeFauve (story by), Anna Boden (story by), Ryan Fleck (story by), Geneva Robertson-Dworet (story by)",
        Actors: "Brie Larson, Samuel L. Jackson, Ben Mendelsohn, Jude Law",
        Plot:
          "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
        Language: "English",
        Country: "USA, Australia",
        Awards: "7 wins & 46 nominations.",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
        Ratings: [
          { Source: "Internet Movie Database", Value: "6.9/10" },
          { Source: "Rotten Tomatoes", Value: "79%" },
          { Source: "Metacritic", Value: "64/100" },
        ],
        Metascore: "64",
        imdbRating: "6.9",
        imdbVotes: "423,584",
        imdbID: "tt4154664",
        Type: "movie",
        DVD: "N/A",
        BoxOffice: "N/A",
        Production: "Marvel Studios",
        Website: "N/A",
        Response: "True",
      },
    ],
    favourite: false,
    isLoading: true,
    searchQuery: "",
    searchZoner: "All",
    dropdownOptions: ["All", "Movies", "Series", "Episodes"],
  };

  componentDidMount() {
    const URL = "";
  }
  handleApiRequest = (query) => {
    fetch(URL).then((res) => res.data);
  };
  handleSearch = (e) => {
    const value = e.target.value;
    console.log(value);
  };
  handleSelect = (e) => {
    console.log("e", e);
  };

  showDetails = (id) => {
    // push id , show details in  routed page
  };

  favouriteSelected = (id) => {
    // store fav in localStorage /sessionStorage
  };

  render() {
    const { dropdownOptions, data } = this.state;
    return (
      <div className="App">
        <div class="search-container">
          <input
            type="text"
            onChange={this.handleSearch}
            placeholder="Search Movie, Episode, Series"
          />
          <Select
            dropdownOptions={dropdownOptions}
            handleSelect={this.handleSelect}
          />
          <button class="search">search</button>
        </div>
        <Card data={data} />
      </div>
    );
  }
}
export default App;
