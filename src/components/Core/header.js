import React from "react";

const headers = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children,
}) => (
  <div>
    <header className="footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h2 style={{ fontFamily: "Times New Roman" }}>MilkMan</h2>
      </div>
    </header>
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-dark mt-auto py-3" style={{ bottom: 0 }}>
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
          An Amazing <span className="text-white">MilkMan</span> Project
        </span>
      </div>
    </footer>
  </div>
);

export default headers;
