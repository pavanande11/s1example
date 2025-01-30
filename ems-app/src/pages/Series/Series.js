import React, { useState } from "react";
import "./Series.css";
import { default as Data } from "../../../src/datamedia.json";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Geners from "../../components/Geners";
import useGenres from "../../hooks/useGenres";

function Series(props) {
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
      ? obj["Media-Type"] === "TVShow"
      : obj["Media-Type"] === "TVShow" && removeCommon(obj["genres"], genreUrl)
  );

  return (
    <>
      <div>
        <span className="pageTitle">TV Shows</span>
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

export default Series;
