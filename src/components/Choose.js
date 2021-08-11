import React from "react";
const Choose = () => {
  return (
    <section className="choose">
      <div className="choose-head">
        <h1>WHY CHOOSE US?</h1>
        <button className="btn">KNOW MORE</button>
      </div>
      <div className="choose-body">
        <div className="card">
          <div className="card-header">
            <div className="icon">
              <img src="/icons/uniregistry-brands.svg" alt="icon" />
            </div>
            <h1>Heading 1</h1>
          </div>
          <div className="card-body">
            <p>
              Itaque earum rerum hic tenetur asap iente delectus rulla accumsan
              ac elit in coeiciendis maiores alias consequatur auectus rullat.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="icon">
              <img src="/icons/uniregistry-brands.svg" alt="icon" />
            </div>
            <h1>Heading 2</h1>
          </div>
          <div className="card-body">
            <p>
              Itaque earum rerum hic tenetur asap iente delectus rulla accumsan
              ac elit in coeiciendis maiores alias consequatur auectus rullat.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="icon">
              <img src="/icons/schlix-brands.svg" alt="icon" />
            </div>
            <h1>Heading 2</h1>
          </div>
          <div className="card-body">
            <p>
              Itaque earum rerum hic tenetur asap iente delectus rulla accumsan
              ac elit in coeiciendis maiores alias consequatur auectus rullat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
