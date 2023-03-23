import { useState } from "react";

export function Footer(props) {
  const { page } = props;
  const [showBibliography, setShowBibliography] = useState(false);

  function handleBibliographyClick() {
    setShowBibliography(!showBibliography);
  }

  const examplePage = page === "Examples";
  const blitzscalingPage = page === "Blitzscaling";
  const maePage = page === "MAE";
  const newsPage = page === "News";
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
          {examplePage && (
            <>
              <div className="row">
                <a href="https://ro.wikipedia.org/wiki/Airbnb" target="_blank">
                  “Airbnb.” Wikipedia, https://ro.wikipedia.org/wiki/Airbnb.
                </a>
                <a
                  href="https://ro.wikipedia.org/wiki/Amazon.com"
                  target="_blank"
                >
                  “Amazon.com.” Wikipedia,
                  https://ro.wikipedia.org/wiki/Amazon.com.
                </a>
                <a
                  href="https://ro.wikipedia.org/wiki/Facebook"
                  target="_blank"
                >
                  “Facebook.” Wikipedia, https://ro.wikipedia.org/wiki/Facebook.
                </a>
              </div>
              <div className="row">
                <a href="https://ro.wikipedia.org/wiki/Google" target="_blank">
                  “Google.” Wikipedia, https://ro.wikipedia.org/wiki/Google.
                </a>
                <a
                  href="https://ro.wikipedia.org/wiki/LinkedIn"
                  target="_blank"
                >
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
            </>
          )}{" "}
          {newsPage && (
            <>
              <div className="row">
                <a
                  href="https://www.wall-street.ro/tag/trading.html"
                  target="_blank"
                >
                  Stiri luate de pe, https://www.wall-street.ro/tag/trading.html
                </a>
                <a href="https://allorigins.win" target="_blank">
                  API folosit, https://allorigins.win
                </a>
              </div>
            </>
          )}
          {blitzscalingPage && (
            <>
              <div className="row">
                <a href="" target="_blank">
                  Hoffman, Reid, and Chris Yeh. Blitzscaling: The Lightning-Fast
                  Path to Building Massively Valuable Companies. Crown, 2018.
                </a>
                <a href="https://hbr.org/2016/04/blitzscaling" target="_blank">
                  Sullivan, Tim. “Blitzscaling.” Harvard Business Review,
                  https://hbr.org/2016/04/blitzscaling
                </a>
                <a
                  href="https://fourweekmba.com/what-is-blitzscaling/"
                  target="_blank"
                >
                  What Is Blitzscaling And Why It Matters,
                  https://fourweekmba.com/what-is-blitzscaling/
                </a>
              </div>
            </>
          )}{" "}
          {maePage && (
            <>
              <div className="row">
                <a
                  href="https://financiarul.ro/stiri/economie/"
                  target="_blank"
                >
                  Financiarul.ro
                </a>
                <a
                  href="https://www.portalmanagement.ro/ce-spun-5-antreprenori-despre-inceputurile-lor-in-afaceri/"
                  target="_blank"
                >
                  Ce spun 5 antreprenori despre inceputurile lor in afaceri,
                  www.portalmanagement.ro
                </a>
                <a
                  href="https://www.portalmanagement.ro/citeste/articole/povesti-despre-afaceri-de-succes/"
                  target="_blank"
                >
                  Povesti despre afaceri de succes, www.portalmanagement.ro
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </footer>
  );
}
