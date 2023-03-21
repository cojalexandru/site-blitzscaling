import CompaniesData from "../assets/companies.json";
import React from "react";

export default function Examples() {
  return (
    <div className="news-container" id="exemple">
      <div className="news-grid">
        {CompaniesData.companies.map((item) => (
          <div className="news-item" key={item.title}>
            <div className="news-image-container">
              <img className="news-image" src={item.img} alt={item.title} />
            </div>
            <h3 className="news-heading">{item.title}</h3>
            <h3 className="news-date">{item.info}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
