import React from "react";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <div className="bg-success text-white text-center py-3">
          <h4>If you got any questions feel free to reach out</h4>
        </div>
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
        <div className={className}>{children}</div>
        <br />
        <footer>
          <div className="container-fluid bg-success text-white text-center py-3">
            <h4>If you got any questions feel free to reach out</h4>
            <button className="btn btn-warning btn-lg">Contact Us</button>
          </div>
          <div className="container">
            <span className="text-muted">
              An amazing <span className="text-white">MERN</span> Bootcamp
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Base;
