import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />      {/*alt와 title은 이미지 위에 커서가 위치할 때 나타나는 pop up*/}
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map(( genre, index ) => (       // index > 다른 이름도 상관없다. 역할은 react가 원하는 key값을 자동으로 생성하는 것이다.
                        <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                {/* <p className="movie__summary">{summary}</p> */}
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;