import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

function about() {
  return (
    <>
      <div className="">
        <div className="container-fluid ">
          <div className="row m-2 justify-content-center my-5 py-5">
            <div className="col col-lg-4 ">
              <img
                src={img1}
                className="img-fluid rounded border-dark"
                alt="..."
              ></img>
            </div>
            <div className="col col-lg-6 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
              <h1 className="text-center mb-3 ">Who Am I?</h1>
              <p>
                Search for the keywords to learn more about each warning. To
                ignore, add // eslint-disable-next-line to the line before.When
                using display: grid, you can make use of gap utilities on the
                parent grid container. This can save on having to add margin
                utilities to individual grid items (children of a display: grid
                container). Gap utilities are responsive by default, and are
                generated via our utilities API, based on the $spacers Sass map.
              </p>
            </div>
          </div>
          <div className="row m-2 justify-content-center my-5 py-5">
            <div className="col col-lg-6 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
              <h1 className="text-center mb-3 ">Who Am I?</h1>
              <p>
                Search for the keywords to learn more about each warning. To
                ignore, add // eslint-disable-next-line to the line before.When
                using display: grid, you can make use of gap utilities on the
                parent grid container. This can save on having to add margin
                utilities to individual grid items (children of a display: grid
                container). Gap utilities are responsive by default, and are
                generated via our utilities API, based on the $spacers Sass map.
              </p>
            </div>
            <div className="col col-lg-4 ">
              <img
                src={img2}
                className="img-fluid rounded border-dark"
                alt=".."
              ></img>
            </div>
          </div>
        </div>
        <div className="row m-2 justify-content-center my-5 py-5">
          <div className="col col-lg-4">
            <img
              src={img3}
              className="img-fluid  rounded border-dark"
              alt="."
            ></img>
          </div>
          <div className="col col-lg-6 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
            <h1 className="text-center mb-3 ">Who Am I?</h1>
            <p>
              Search for the keywords to learn more about each warning. To
              ignore, add // eslint-disable-next-line to the line before.When
              using display: grid, you can make use of gap utilities on the
              parent grid container. This can save on having to add margin
              utilities to individual grid items (children of a display: grid
              container). Gap utilities are responsive by default, and are
              generated via our utilities API, based on the $spacers Sass map.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;
