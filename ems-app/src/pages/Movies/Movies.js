import React, { useState } from "react";
import "./Movies.css";
import { default as Data } from "../../../src/datamedia.json";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Geners from "../../components/Geners";
import useGenres from "../../hooks/useGenres";

function Movies(props) {
  const [selectedGeners, setSelectedGeners] = useState([]);
  const [geners, setGeners] = useState([]);
  const genreUrl = useGenres(selectedGeners);

  const removeCommon = (first, second) => {
    const spreaded = [...first, ...second];
    return spreaded.filter((el) => {
      return first.includes(el) && second.includes(el);
    }).length;
  };

  const datamovies = Data.filter((obj) =>
    selectedGeners.length < 1
      ? obj["Media-Type"] === "Movies"
      : obj["Media-Type"] === "Movies" && removeCommon(obj["genres"], genreUrl)
  );

  return (
    <>
      <div>
        <span className="pageTitle">Movies</span>
        <Geners
          selectedGeners={selectedGeners}
          setSelectedGeners={setSelectedGeners}
          geners={geners}
          setGeners={setGeners}
        />
      </div>
      <div className="pageContent">
        <CustomPagination dataContent={datamovies} />
      </div>
    </>
  );
}

export default Movies;
