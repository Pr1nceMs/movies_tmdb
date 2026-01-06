import React from "react";

const Main = () => {
  return (
    <div className="movie-content">
      <div className="cards-container">
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="card-info">
            <h3>Utilisateurs</h3>
            <p>1,234</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <div className="card-info">
            <h3>Ventes</h3>
            <p>45,678€</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-chart-pie"></i>
          </div>
          <div className="card-info">
            <h3>Performance</h3>
            <p>89%</p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <i className="fas fa-chart-pie"></i>
          </div>
          <div className="card-info">
            <h3>Benefices</h3>
            <p>+25,943€</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
