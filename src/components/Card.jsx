import React from "react";
const Card = (props) => {
  const { data, favouriteSelected, showDetails } = props;
  return (
    <div class="card-container">
      {data.map((item, i) => (
        <div class="card">
          <img src={item.Poster} onClick={showDetails} />

          <div class="card-info">
            <label>Name</label>
            <span>:</span>
            <div class="about">{item.Title}</div>
            <label>Released </label> <span>:</span>
            <div class="about">{item.Released}</div>
            <label>Rating </label>
            <span>:</span>
            <div class="about">{item.imdbRating}</div>
          </div>

          <span onClick={favouriteSelected}>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Card;
