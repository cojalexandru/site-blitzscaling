import React from "react";
import { Helmet } from "react-helmet";
import "./views.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Blitzscaling() {
  return (
    <div>
      <Helmet>
        <title>Blitzscaling - Despre</title>
      </Helmet>
      <Header />
      <div className="info-container">
        <div className="info-header">
          <h1 className="info-title">Ce este "Blitzscaling"?</h1>
        </div>
        <div className="info-content">
          <div className="info-section">
            <img className="info-image" src="/assets/stocks-1.png" alt="" />
            <div className="info-text">
              <h2 className="info-subtitle">Definiție</h2>
              <p className="info-description">
                Blitzscaling este o strategie ce are la baza creșterea foarte
                rapidă a unei companii care sa serveasca o piață mare și, de
                obicei, globală, cu scopul de a obține monopol.
              </p>
            </div>
          </div>
          <div className="info-section">
            <div className="info-text">
              <h2 className="info-subtitle">Provenienta cuvantului</h2>
              <p className="info-description">
                Blitzscaling provine de la cuvantul german “blitzkrieg” care se
                traduce în “război fulger”, acesta reprezinta o strategie
                militara în care pentru a putea acționa cat mai rapid ai după
                tine doar lucrurile de care ai nevoie, iar după ce ajungi la
                jumătatea destinație alegi sa te întorci sau sa continui, astfel
                ori ai parte de o mare pierde ori de un mare câștig.
              </p>
            </div>
            <img
              className="info-image"
              src="/assets/blitzscaling-1.jfif"
              alt=""
            />
          </div>
          <div className="info-section">
            <img
              className="info-image"
              src="/assets/blitzscaling-2.jfif"
              alt=""
            />
            <div className="info-text">
              <h2 className="info-subtitle">
                De ce “Blitzscaling” este o strategie buna?
              </h2>
              <p className="info-description">
                Deoarece trăim într-o perioada în care toata lumea este
                interconectată de obicei prima companie care vine și
                popularizeaza o idee este și cea ce are parte de cel mai mare
                succes. De aceea este important sa actionezi cat mai rapid.
                <br /> <br />
                De obicei companiile ce au parte de cel mai mare succes cu
                aceasta strategie sunt cele cu idei ce țin de viitor și sunt de
                folos, ex:“Amazon”,“Google”,“Facebook”, “LinkedIn“, “AirBnB”,
                “Uber”.Toate aceste idei au pornit de le nevoi primare ale
                oamenilor, produse, socializare, informație, locuri de munca,
                chirie, transport.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer page="Blitzscaling" />
    </div>
  );
}

export default Blitzscaling;
