import React from "react";
import { default as Data } from "../../../src/datamedia.json";
import "./Trending.css";
import CustomPagination from "../../components/Pagination/CustomPagination";
function Trending(props) {
  return (
    <>
      <div className="pageContent">
        <span className="pageTitle">Trending</span>
      </div>
      <div>
        <CustomPagination dataContent={Data} />
      </div>
    </>
  );
}

export default Trending;
