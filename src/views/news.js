import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./views.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.allorigins.win/raw?url=https://www.wall-street.ro/tag/trading.html"
      );
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const items = doc.querySelectorAll(".article-card");
      const news = Array.from(items).map((item) => {
        const title = item.querySelector(".common-padder a").textContent;
        const link = item.querySelector("a").href;
        const date = item.querySelector(".common-padder span").textContent;
        const image =
          item.querySelector("img").getAttribute("data-pagespeed-lazy-src") ||
          "";
        return { title, link, date, image };
      });
      setNews(news);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Blitzscaling - Noutati</title>
      </Helmet>
      <Header />
      <div className="news-container">
        {loading ? (
          <h2 className="news-loading">Stirile se incarca...</h2>
        ) : (
          <div className="news-grid">
            {news.map((item) => (
              <div className="news-item" key={item.link}>
                <a
                  className="news-link"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="news-image-container">
                    <img
                      className="news-image"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <h3 className="news-heading">{item.title}</h3>
                  <p className="news-date">{item.date}</p>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default News;
