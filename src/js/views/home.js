import React from "react";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    {
      <div>
        <img alt="render a pic here"></img>
        <div>
          <h2>name</h2>
          <h4>phone</h4>
          <h4>email</h4>
          <h4>address</h4>
        </div>
        <div>
          <button>edit</button>
          <button>delete</button>
        </div>
      </div>
    }
  </div>
);
