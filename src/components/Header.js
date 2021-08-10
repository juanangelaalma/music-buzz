import React from "react";

const Header = () => {
  return (
    <header
      style={{ backgroundImage: "url(/banner.jpg)" }}
      className="container"
    >
      <div className="jumbotron">
        <h1>LISTEN TO MUSIC BUZZ ANYWHERE.</h1>
        <p>
          Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non
          nulla sit amet nisl tempus convallis quis ac lectus
        </p>
        <button className="btn" type="button">READ MORE</button>
      </div>
    </header>
  );
};

export default Header;
