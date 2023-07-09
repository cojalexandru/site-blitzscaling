import React, { useEffect, useState } from "react";

export default function Examples() {
  const [examples, setExamples] = useState([]);

  useEffect(() => {
    const fetchExamples = async () => {
      try {
        const response = await fetch(
          "http://188.214.88.131:3000/api/get_examples"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch examples");
        }
        const data = await response.json();
        setExamples(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchExamples();
  }, []);

  return (
    <>
      <div className="info-header">
        <h1 className="info-title">Exemple de afaceri</h1>
      </div>

      <div className="news-container" id="exemple">
        <div className="news-grid">
          {examples.map((item) => (
            <div className="news-item" key={item.title}>
              <a className="news-link" href={"/" + item.alt} rel="noreferrer">
                <div className="news-image-container">
                  <img className="news-image" src={item.img} alt={item.title} />
                </div>
                <h3 className="news-heading example">{item.title}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
