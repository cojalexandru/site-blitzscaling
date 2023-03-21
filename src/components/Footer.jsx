import { useState } from "react";

export function Footer() {
  const [showBibliography, setShowBibliography] = useState(false);

  function handleBibliographyClick() {
    setShowBibliography(!showBibliography);
  }

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div>
          <p>Profesor indrumator:</p>
          <p>Tiron Elena Loredana - profesor economie</p>
          <p>Ciurariu Cristina - profesor informatica</p>
        </div>
        <div>
          <div className="copyright">
            <button
              onClick={handleBibliographyClick}
              className="bibliography-button"
            >
              <img alt="bibliography" src="/assets/bibliography.svg" />
            </button>
            <p>©Cojocaru Alexandru</p>
          </div>
          <p className="highschool">Liceul "Stefan Procopiu"</p>
        </div>
      </div>
      {showBibliography && (
        <div className="bibliography">
          <div className="row">
            <a href="https://ro.wikipedia.org/wiki/Airbnb" target="_blank">
              “Airbnb.” Wikipedia, https://ro.wikipedia.org/wiki/Airbnb.
            </a>
            <a href="https://ro.wikipedia.org/wiki/Amazon.com" target="_blank">
              “Amazon.com.” Wikipedia, https://ro.wikipedia.org/wiki/Amazon.com.
            </a>
            <a href="https://ro.wikipedia.org/wiki/Facebook" target="_blank">
              “Facebook.” Wikipedia, https://ro.wikipedia.org/wiki/Facebook.
            </a>
          </div>
          <div className="row">
            <a href="https://ro.wikipedia.org/wiki/Google" target="_blank">
              “Google.” Wikipedia, https://ro.wikipedia.org/wiki/Google.
            </a>
            <a href="https://ro.wikipedia.org/wiki/LinkedIn" target="_blank">
              “LinkedIn.” Wikipedia, https://ro.wikipedia.org/wiki/LinkedIn.
            </a>
            <a
              href="https://ro.wikipedia.org/wiki/Uber_(companie)"
              target="_blank"
            >
              “Uber (companie).” Wikipedia,
              https://ro.wikipedia.org/wiki/Uber_(companie).
            </a>
          </div>
        </div>
      )}
    </footer>
  );
}
