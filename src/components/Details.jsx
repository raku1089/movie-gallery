import React from "react";
const Details = (props) => {
  const { info } = props;
  return (
    <div>
      <img src={info.Poster} alt="images" />
      <div>{info.Title}</div>
      <div>{info.Awards}</div>
      <div>{info.imdbRating}</div>
      <div>{info.Production}</div>
      <div>{info.Genre}</div>
      <div>
        {info.Director}
        {info.Writer}
      </div>
    </div>
  );
};

export default Details;
// todo CSS
