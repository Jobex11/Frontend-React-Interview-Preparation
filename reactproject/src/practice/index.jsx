import React, { useState } from "react";
import data from "./data";
import "./style.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const Practice = () => {


  function handleSingle() {}
  function handleMulti() {}
  return (
    <div>
      <button onClick={}>EnableMultiSelection</button>
      <div>
        {data && data.length > 0 ? (
          <div>
            {data.map((item) => (
              <div>
                <div onClick={handleSingle}>
                  <h2>{item.name}</h2>
                  <span>
                    <FaPlus />
                  </span>
                </div>
                <div>{
                  
                  }</div>
              </div>
            ))}
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Practice;
