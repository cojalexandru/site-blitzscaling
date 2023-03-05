import { Fragment } from "react";
import CompaniesData from "../assets/companies.json";

function Example({ title, img, alt }) {
  return (
    <div className="example">
      <div className="example-image">
        <img src={img} alt={alt} className="photo" />
      </div>
      <div className="example-info">
        <div className="example-name">
          <span>
            <span>{title}</span>
            <br />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Examples() {
  return (
    <Fragment>
      <div className="examples-container" id="example">
        <div className="examples-header">
          <div className="headline-text">
            <span>
              Exista o multime de companii care s-au folosit de metoda
              &quot;Blitzscaling&quot; pentru a avea succes
            </span>
          </div>
        </div>
        <div className="section">
          <div className="examples">
            {CompaniesData.companies.slice(0, 3).map((data, index) => (
              <Example key={index} {...data} />
            ))}
          </div>
          <div className="examples">
            {CompaniesData.companies.slice(3).map((data, index) => (
              <Example key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
