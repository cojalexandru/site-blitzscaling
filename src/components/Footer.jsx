import { useState } from "react";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

export function Footer(props) {
  const { page } = props;
  var bibliography;
  switch (page) {
    default: {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Airbnb"
            target="_blank"
          >
            “Airbnb.” Wikipedia, https://ro.wikipedia.org/wiki/Airbnb.
          </a>
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Amazon.com"
            target="_blank"
          >
            “Amazon.com.” Wikipedia, https://ro.wikipedia.org/wiki/Amazon.com.
          </a>
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Facebook"
            target="_blank"
          >
            “Facebook.” Wikipedia, https://ro.wikipedia.org/wiki/Facebook.
          </a>
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Google"
            target="_blank"
          >
            “Google.” Wikipedia, https://ro.wikipedia.org/wiki/Google.
          </a>
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/UiPath"
            target="_blank"
          >
            “UiPath” Wikipedia, https://ro.wikipedia.org/wiki/UiPath.
          </a>
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Uber_(companie)"
            target="_blank"
          >
            “Uber (companie).” Wikipedia,
            https://ro.wikipedia.org/wiki/Uber_(companie).
          </a>
          <a
            className="bibliography-link"
            href="https://www.forbes.ro/articles/forbes-top-500-miliardari-daniel-dines-este-cel-mai-bogat-om-din-romania-150932"
            target="_blank"
          >
            “Forbes TOP 500 Miliardari 2019 – Daniel Dines este cel mai bogat om
            din România” Forbes,
            https://www.forbes.ro/articles/forbes-top-500-miliardari-daniel-dines-este-cel-mai-bogat-om-din-romania-150932.
          </a>

          <a
            className="bibliography-link"
            href="https://www.portalmanagement.ro/ce-spun-5-antreprenori-despre-inceputurile-lor-in-afaceri/"
            target="_blank"
          >
            “Ce spun 5 antreprenori despre inceputurile lor in afaceri” Portal
            Management,
            https://www.portalmanagement.ro/ce-spun-5-antreprenori-despre-inceputurile-lor-in-afaceri/.
          </a>
          <a
            className="bibliography-link"
            href="https://www.portalmanagement.ro/citeste/articole/povesti-despre-afaceri-de-succes/"
            target="_blank"
          >
            “Povesti despre afaceri de succes” Portal Management,
            https://www.portalmanagement.ro/citeste/articole/povesti-despre-afaceri-de-succes/.
          </a>
          <a
            className="bibliography-link"
            href="https://ro.economy-pedia.com/11031923-business-environment"
            target="_blank"
          >
            “Mediul de afaceri - Ce este, definiție și concept” Economy-Wiki.com,
            https://ro.economy-pedia.com/11031923-business-environment.
          </a>
          <a
            className="bibliography-link"
            href="https://www.wall-street.ro/tag/trading.html"
            target="_blank"
          >
            “Ultimele stiri legate de trading” Wall-Street,
            https://www.wall-street.ro/tag/trading.html.
          </a>
          <a
            className="bibliography-link"
            href="https://www.mae.ro/node/1418/1"
            target="_blank"
          >
            “Diplomația economică” Ministerul Afacerilor Externe,
            https://www.mae.ro/node/1418/1.
          </a>

          <a
            className="bibliography-link"
            href="https://fourweekmba.com/what-is-blitzscaling/"
            target="_blank"
          >
            “What Is Blitzscaling And Why It Matters” FourWeekMBA,
            https://fourweekmba.com/what-is-blitzscaling/.
          </a>
          <a
            className="bibliography-link"
            href="https://hbr.org/2016/04/blitzscaling"
            target="_blank"
          >
            Sullivan, Tim. “Blitzscaling.” Harvard Business Review,
            https://hbr.org/2016/04/blitzscaling.
          </a>
          <a
            className="bibliography-link"
            href="https://www.blitzscaling.com/"
            target="_blank"
          >
            Hoffman, Reid, and Chris Yeh. Blitzscaling: The Lightning-Fast Path
            to Building Massively Valuable Companies. Crown, 2018.
            https://www.blitzscaling.com/.
          </a>
          <a
            className="bibliography-link"
            href="https://undraw.co/"
            target="_blank"
          >
            Imagini de pe https://undraw.co/.
          </a>
        </div>
      );
      break;
    }
    case "uipath": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/UiPath"
            target="_blank"
          >
            “UiPath” Wikipedia, https://ro.wikipedia.org/wiki/UiPath.
          </a>
          <a
            className="bibliography-link"
            href="https://www.forbes.ro/articles/forbes-top-500-miliardari-daniel-dines-este-cel-mai-bogat-om-din-romania-150932"
            target="_blank"
          >
            “Forbes TOP 500 Miliardari 2019 – Daniel Dines este cel mai bogat om
            din România” Forbes,
            https://www.forbes.ro/articles/forbes-top-500-miliardari-daniel-dines-este-cel-mai-bogat-om-din-romania-150932.
          </a>
        </div>
      );
      break;
    }
    case "amazon": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Amazon.com"
            target="_blank"
          >
            “Amazon.com.” Wikipedia, https://ro.wikipedia.org/wiki/Amazon.com.
          </a>
        </div>
      );
      break;
    }
    case "airbnb": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Airbnb"
            target="_blank"
          >
            “Airbnb.” Wikipedia, https://ro.wikipedia.org/wiki/Airbnb.
          </a>
        </div>
      );
      break;
    }
    case "google": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Google"
            target="_blank"
          >
            “Google.” Wikipedia, https://ro.wikipedia.org/wiki/Google.
          </a>
        </div>
      );
      break;
    }
    case "uber": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Uber_(companie)"
            target="_blank"
          >
            “Uber (companie).” Wikipedia,
            https://ro.wikipedia.org/wiki/Uber_(companie).
          </a>
        </div>
      );
      break;
    }
    case "facebook": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://ro.wikipedia.org/wiki/Facebook.com"
            target="_blank"
          >
            “Facebook.com.” Wikipedia,
            https://ro.wikipedia.org/wiki/Facebook.com.
          </a>
        </div>
      );
      break;
    }
    case "noutati": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://www.wall-street.ro/tag/trading.html"
            target="_blank"
          >
            “Ultimele stiri legate de trading” Wall-Street,
            https://www.wall-street.ro/tag/trading.html.
          </a>
        </div>
      );
      break;
    }
    case "blitzscaling": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://fourweekmba.com/what-is-blitzscaling/"
            target="_blank"
          >
            “What Is Blitzscaling And Why It Matters” FourWeekMBA,
            https://fourweekmba.com/what-is-blitzscaling/.
          </a>
          <a
            className="bibliography-link"
            href="https://hbr.org/2016/04/blitzscaling"
            target="_blank"
          >
            Sullivan, Tim. “Blitzscaling.” Harvard Business Review,
            https://hbr.org/2016/04/blitzscaling.
          </a>
          <a
            className="bibliography-link"
            href="https://www.blitzscaling.com/"
            target="_blank"
          >
            Hoffman, Reid, and Chris Yeh. Blitzscaling: The Lightning-Fast Path
            to Building Massively Valuable Companies. Crown, 2018.
            https://www.blitzscaling.com/.
          </a>
        </div>
      );
      break;
    }
    case "mda_ro": {
      bibliography = (
        <div className="bibliography-content">
          <a
            className="bibliography-link"
            href="https://www.portalmanagement.ro/ce-spun-5-antreprenori-despre-inceputurile-lor-in-afaceri/"
            target="_blank"
          >
            “Ce spun 5 antreprenori despre inceputurile lor in afaceri” Portal
            Management,
            https://www.portalmanagement.ro/ce-spun-5-antreprenori-despre-inceputurile-lor-in-afaceri/.
          </a>
          <a
            className="bibliography-link"
            href="https://www.portalmanagement.ro/citeste/articole/povesti-despre-afaceri-de-succes/"
            target="_blank"
          >
            “Povesti despre afaceri de succes” Portal Management,
            https://www.portalmanagement.ro/citeste/articole/povesti-despre-afaceri-de-succes/.
          </a>
          <a
            className="bibliography-link"
            href="https://www.mae.ro/node/1418/1"
            target="_blank"
          >
            “Diplomația economică” Ministerul Afacerilor Externe,
            https://www.mae.ro/node/1418/1.
          </a>
          <a
            className="bibliography-link"
            href="https://ro.economy-pedia.com/11031923-business-environment"
            target="_blank"
          >
            “Mediul de afaceri - Ce este, definiție și concept” Economy-Wiki.com,
            https://ro.economy-pedia.com/11031923-business-environment.
          </a>
        </div>
      );
      break;
    }
  }
  const [showBibliography, setShowBibliography] = useState(false);

  function handleBibliographyClick() {
    setShowBibliography(!showBibliography);
  }

  return (
    <>
      {showBibliography && (
        <div className="bibliography-overlay">
          <div className="bibliography">
            <button className="close-button" onClick={handleBibliographyClick}>
              <Close />
            </button>
            <h2 className="bibliography-title">Bibliografie</h2>
            {bibliography}
          </div>
        </div>
      )}
      <footer className="footer-container">
        <div className="footer-content">
          <div>
            <p>Profesor îndrumător:</p>
            <p>Tiron Elena Loredana - profesor economie</p>
            <p>Ciurariu Cristina - profesor informatică</p>
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
            <a href="http://lspvs.ro" target="blank">
              <p className="highschool">Liceul "Ștefan Procopiu"</p>{" "}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
