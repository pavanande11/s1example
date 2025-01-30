import Pagination from "@mui/material/Pagination";
import React, { useState } from "react";
import SingleContent from "../SingleContent/SingleContent";
import "../../pages/Trending/Trending.css";
import usePagination from "./Pagination";

function CustomPagination({ dataContent }) {
  const [page, setPage] = useState(1);
  console.log("content", dataContent);
  const PER_PAGE = 25;
  const count = Math.ceil(dataContent.length / PER_PAGE);

  const _DATA = usePagination(dataContent, PER_PAGE);

  const onPageChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
    window.scroll(0, 0);
  };
  const st = {
    position: "sticky",
    bottom: "0px"
  };
  return (
    <>
      <div className="trending">
        {_DATA.currentData().map((d, index) => {
          return (
            <SingleContent
              key={index}
              id={index}
              poster={d.posterurl}
              title={d.title}
              date={d.releaseDate}
              vote={d.imdbRating}
              mediatype={d["Media-Type"]}
            />
          );
        })}
      </div>
      <div style={st}>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={count}
          page={page}
          onChange={onPageChange}
        />
      </div>
    </>
  );
}

export default CustomPagination;
