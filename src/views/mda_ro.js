import React from "react";
import { Helmet } from "react-helmet";
import "./views.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function MDA_Ro() {
  return (
    <div>
      <Helmet>
        <title>Blitzscaling - Mediul de afaceri din România</title>
      </Helmet>
      <Header />
      <div className="info-container">
        <div className="info-header">
          <h1 className="info-title">Mediul de afaceri din România</h1>
        </div>
        <div className="info-content">
          <div className="info-section">
            <img className="info-image" src="/assets/mae.jpg" alt="" />
            <div className="info-text">
              <h2 className="info-subtitle">Ministerul Afacerilor Externe</h2>
              <p className="info-description">
                Activitatea MAE are în vedere implicarea, directă sau împreună
                cu instituţiile centrale cu atribuții directe legate de relația
                cu mediul de afaceri din România, în sprijinirea activităţilor
                şi proiectelor de importanţă strategică pentru România, precum
                și a activităţilor curente de promovare economică externă și
                comerţ exterior, extinderea prezenței companiilor româneşti pe
                terţe pieţe, atragerea de investiţii străine în România ș.a..
                MAE desfăşoară următoarele activităţi:
                <li id="1">
                  Promovarea externă, pentru a facilita intrarea pe diferite
                  pieţe şi extinderea firmelor româneşti deja implantate în
                  străinătate;
                </li>
                <li>
                  Cooperarea cu instituţii româneşti competente în vederea
                  fluidizării circuitului informaţiei şi a medierii contactelor
                  necesare pentru oamenii de afaceri români, în scopul
                  facilitării accesului acestora pe pieţele externe;
                </li>
                <li>
                  Monitorizarea, împreună cu direcţiile de zonă, a rezolvării
                  problemelor cu care se confruntă oamenii de afaceri români în
                  derularea operaţiunilor în străinătate; Organizarea de
                  întâlniri cu reprezentanţi ai mediului de afaceri pentru
                  identificarea tipului de sprijin necesar;
                </li>
                <li>
                  Organizarea sau sprijinirea altor structuri guvernamentale în
                  organizarea de evenimente cu caracter economic (conferinţe,
                  seminarii, reuniuni, forumuri);
                </li>
                <li>
                  Asistenţă specifică domeniului de activitate în organizarea de
                  misiuni economice în străinătate;
                </li>
                <li>
                  Accentuarea prezenţei intereselor economice româneşti prin
                  valorificarea potenţialului reprezentat de consulii onorifici
                  ai României;
                </li>
                <li>
                  Elaborarea şi urmărirea punerii în aplicare a unui calendar de
                  acţiuni în scopul promovării intereselor economice ale
                  României;
                </li>
                <li>
                  Urmărirea proiectelor regionale majore cu beneficii pentru
                  economia românească, în domenii multiple, precum transporturi,
                  protecţia mediului, telecomunicaţii, ş.a.;
                </li>
                <li>
                  Contribuţie la elaborarea documentelor cu profil economic
                  referitoare la situaţia macroeconomică din România, circulate
                  la diferite foruri şi instituţii internaţionale.
                </li>
              </p>
            </div>
          </div>
          <div className="info-section">
            <div className="info-text">
              <h2 className="info-subtitle">Mediul de afaceri</h2>
              <p className="info-description">
                Mediul de afaceri este ansamblul factorilor care influențează
                activitatea unei companii. Ele pot avea o origine internă sau
                externă și sunt de altă natură. Mediul de afaceri cuprinde apoi
                toate variabilele care pot afecta direct sau indirect
                organizația și cu privire la care trebuie să funcționeze. Acest
                mediu este, de asemenea, caracterizat prin faptul că este
                modificabil în timp și adesea dificil de prezis. Poate fi, de
                exemplu, ca înainte de intrarea în conducerea unui nou guvern,
                cadrul legal pe care lucrează compania să varieze.
              </p>
            </div>
            <img className="info-image" src="/assets/marketing.svg" alt="" />
          </div>
          <div className="info-section">
            <img className="info-image" src="/assets/categories.svg" alt="" />
            <div className="info-text">
              <h2 className="info-subtitle">Tipuri de mediu de afaceri</h2>
              <p className="info-description">
                Există în principal două tipuri de mediu de afaceri:
                <ul>
                  <li>
                    Mediul general sau macroeconomic: Este unul care grupează
                    factorii externi care au impact asupra companiei și care,
                    prin urmare, sunt dincolo de controlul acesteia.
                    Principalele sunt:
                  </li>
                  <ul>
                    <li>
                      Factori economici: Ne referim la inflație, ocuparea forței
                      de muncă, produsul intern brut (PIB), printre alți
                      indicatori.
                    </li>
                    <li>
                      Factori socioculturali: idiosincrasia populației,
                      obiceiurile și tot ceea ce cuprinde cultura lor.
                    </li>
                    <li>
                      Factori legali: Se referă la cadrul legal sub care sunt
                      guvernați acționarii companiei. Aceasta determină, de
                      exemplu, ce beneficii ar trebui să primească angajații
                      companiei, cum ar fi perioada de vacanță.
                    </li>
                    <li>
                      Factori tehnologici: Acestea sunt inovațiile dezvoltate pe
                      piață și care au o influență asupra activității firmei,
                      cum ar fi Internetul.
                    </li>
                    <li>
                      Factori de mediu: este ecosistemul în care își desfășoară
                      activitatea firma și care poate suferi contaminarea din
                      cauza activității companiei.
                    </li>
                  </ul>
                </ul>
                <br></br>
                <ul>
                  <li>
                    Mediu specific sau micromediul: Aceștia sunt factorii cei
                    mai apropiați de companie și asupra cărora aceasta poate
                    avea un anumit control. Urmează următoarele:
                  </li>
                  <ul>
                    <li>
                      Clienți: Ei sunt cei care cumpără produsele dezvoltate de
                      firmă.
                    </li>
                    <li>
                      Furnizori: Sunt cei care furnizează companiei
                      contribuțiile necesare procesului său de producție.
                    </li>
                    <li>
                      Concurenți: sunt acele firme care oferă aceleași produse
                      ca și compania sau un substitut pentru acestea.
                    </li>
                    <li>
                      Entități financiare: sunt instituții la care firma se
                      poate adresa pentru finanțare.
                    </li>
                    <li>
                      Piața muncii: este capitalul uman disponibil și din care
                      compania trebuie să își aleagă lucrătorii. În acest sens,
                      costul forței de muncă este important și calificarea sa
                      este cea cerută de organizație.
                    </li>
                    <li>
                      Autorități: se referă la Guvern și la autorități, pe care
                      populația le alege și care sunt însărcinate cu dirijarea
                      țării, regiunii sau localității.
                    </li>
                    <li>
                      Comunitate: este mediul social în care se desfășoară
                      activitățile companiei.
                    </li>
                  </ul>
                </ul>
              </p>
            </div>
          </div>
          <div className="info-section">
            <div className="info-text">
              <h2 className="info-subtitle">
                Cooperarea cu organizaţii economice internaţionale
              </h2>
              <p className="info-description">
                MAE asigură reprezentarea României în cadrul organizaţiilor
                internaţionale cu specific economic, comercial şi financiar.
                Totodată sprijină organismele centrale responsabile în
                promovarea intereselor specific ale României. Principalele
                atribuţii se referă la:
                <li>
                  Coordonarea activităţilor desfăşurate de România pe lângă
                  Organizaţia pentru Cooperare şi Dezvoltare Economică (OCDE);
                </li>
                <li>
                  Promovarea, împreună cu alte instituţii abilitate, a
                  intereselor României în/pe lângă organizaţii economice
                  internaţionale (Fondul Monetar Internaţional, Grupul Băncii
                  Mondiale, Banca Europeană pentru Reconstrucţie şi Dezvoltare,
                  Organizaţia Mondială a Comerţului, ş.a.);
                </li>
                <li>
                  Valorificarea prezenţei reprezentanţilor României la/pe lângă
                  organizaţiile internaţionale cu caracter economic.
                </li>
              </p>
            </div>
            <img className="info-image" src="/assets/cooperation.png" alt="" />
          </div>
          <div className="info-section">
            <img
              className="info-image"
              src="/assets/business_plan.png"
              alt=""
            />
            <div className="info-text">
              <h2 className="info-subtitle">
                Cum se prezintă mediul de afaceri
              </h2>
              <p className="info-description">
                După un an marcat de multe incertitudini și dificultăți pentru
                mediul de afaceri, întreprinderile mici și mijlocii au fost
                nevoite să se adapteze unui nou context economic. Pandemia a
                condus la numeroase schimbări în mediul de business, fapt pentru
                care antreprenorii au schimbat strategia și au realizat
                compromisuri financiare. Din cauza acestor condiții nefavorabile
                economiei, începutul anului 2021 a fost unul marcat de fuziuni,
                preluări, un comportament de consum atipic, dar și de apariția a
                numeroase startup-uri inovatoare și parteneriate între companii.
                În prezent, foarte multe companii s-au adaptat contextului
                economic, iar strategia de business este puternic influențată de
                dorința de inovare atât din punct de vedere al produselor și
                serviciilor noi, cât și din perspectiva proceselor financiare.
                În mod cert, mediul economic și evoluția tehnologică au fost
                factorii care au schimbat necesitățile oamenilor și implicit al
                afacerilor. În rândurile următoare vei afla informații utile
                despre provocările și oportunitățile din mediul actual de
                business și cum se adaptează afacerile la aceste tendințe.
              </p>
              <h2 className="info-subtitle">
                Provocări și oportunități în mediul actual de afaceri
              </h2>
              <p className="info-description">
                Criza generată de Covid-19 a avut un impact major asupra
                mediului de afaceri. Astfel, antreprenorii au întâmpinat
                numeroase obstacole în privința bunăstării angajaților, a
                prevenirii diminuării profitului și totodată a implicării
                clienților. Din acest motiv, aceștia au realizat multe eforturi
                pentru a menține echipa unită și pentru a dispune de resurse și
                sisteme bazate pe noile inovații ale tehnologiei actuale.
              </p>
              <h2 className="info-subtitle">
                Digitalizarea – o cheie importantă pentru un viitor prosper al
                mediului de business
              </h2>
              <p className="info-description">
                Digitalizarea este un concept complex care include mai multe
                înțelesuri și care vizează adoptarea tehnologiei actuale în
                procesele operaționale, dar și adaptarea rezultatului final ce
                ajunge la client. În funcție de obiectul de activitate al firmei
                și necesitățile acesteia, digitalizarea presupune o abordare
                diferită a întregului proces de business. Aceasta atrage
                numeroase avantaje, dat fiind faptul că astăzi orice afacere are
                nevoie de o parte digitală. Indiferent de piața pe care activezi
                este nevoie de adoptarea unor soluții digitale în vederea
                dezvoltării proceselor de business.
                <p id="2">
                  Pentru unele afaceri, acest aspect este o mare oportunitate,
                  care poate face diferența între reușită sau eșec.
                </p>
                Anul acesta, tot mai multe companii și-au îmbunătățit procesele
                operaționale apelând la soluții digitale, reușind o optimizare
                din punct de vedere tehnic și financiar. Însă, pentru unele
                firme infrastructura digitală rămâne o provocare, în care
                implementarea unor sisteme inovative implică timp, resurse și un
                plan strategic bine pus la punct.
              </p>
              <h2 className="info-subtitle">
                Menținerea unui cash-flow stabil – o preocupare constantă a
                companiilor
              </h2>
              <p className="info-description">
                Una dintre provocările din acest an cu care se confruntă
                business-urile se referă la menținerea unui nivel optim al
                cash-flow-ului.
                <p id="3">
                  În principal, lipsa unui cash-flow stabil a fost provocat de
                  factori cu mare impact asupra proceselor operaționale, precum
                  <li>Diminuarea vânzărilor;</li>
                  <li>
                    Imposibilitatea de a accesa surse de finanțare viabile
                    pentru unele business-uri (cele aflate la început de drum);
                  </li>
                  <li>
                    Lipsa plăților de încasat sau întârzierea plăților de la
                    clienți;
                  </li>
                </p>
                <br></br>
                Este esențială realizarea unei analize constante a
                cash-flow-ului deoarece aceasta permite:
                <li> O perspectivă privind vânzările realizate; </li>
                <li>
                  Adoptarea unor decizii cu privire la relația cu partenerii
                  firmei;
                </li>
                <li>Un control mai riguros asupra proceselor de business.</li>
                <br></br>
                Așadar, cash-flow-ul este vital pentru orice afacere, iar
                gestionarea lui într-o manieră eficientă va crea premisele unei
                previziuni financiare necesare dezvoltării unei afaceri.
              </p>
            </div>
          </div>
          <div className="info-section">
            <div className="info-text">
              <h2 className="info-subtitle" id="4">
                Accesul la finanțare – O problemă des întâlnită în
                antreprenoriatul românesc
              </h2>
              <p className="info-description">
                În mod cert, lipsa lichidității obligă în final compania să
                apeleze la surse de finanțare, dar care și acestea emit unele
                obligații de respectat. <br></br>
                <br></br>La mare căutare este și obținerea finanțării prin
                credite bancare sau alte investiții de ordin bancar, însă nu
                toate companiile se încadrează în cerințele impuse de
                instituțiile bancare. Cel puțin pentru companiile la început de
                drum, este foarte greu să obțină o astfel de finanțare. Însă, în
                prezent, se regăsesc numeroase oportunități de finanțare, cu
                diverse avantaje pentru întreprinderile mici și mijlocii.
                <br></br>
                <br></br>O oportunitate în privința finanțării o constă
                fondurile nerambursabile oferite de instituții europene, dar și
                microfinanțarea sau factoringul. <br></br>
                <br></br>Serviciile de factoring reprezintă o soluție eficientă
                pentru numeroase companii care se confruntă cu optimizarea
                încasărilor. Întârzierile privind încasările de la clienții și
                partenerii firmei înseamnă un dezechilibru la nivelul
                cash-flow-ului, care poate avea repercursiuni asupra întregii
                activități de business. Având oportunitatea de a apela la
                această soluție de finanțare, numeroși antreprenori au garanția
                unei gestionări a creanțelor/ facturilor într-un mod mult mai
                sigur, eficient și de durată. Adaptarea business-ului la mediul
                de afaceri actual Pentru a face față tuturor provocărilor din
                mediul economic actual, companiile trebuie să-și alinieze
                business-ul la tendințele din piața în care activează. În
                vederea asigurării unei continuități a activității pe care o
                desfășoară, antreprenorii trebuie să își adapteze strategia de
                afaceri în contextul unei evoluții tehnologice generate de noile
                inovații apărute. Firmele au fost în situația de a-și regândi
                planul strategic de dezvoltare urmărind ca direcții de adaptare
                a afacerii: Diminuarea costurilor pentru a echilibra fluxul de
                numerar necesar funcționării proceselor operaționale; Realizarea
                unor produse/ servicii inovative în vederea creșterii
                portofoliului; Optimizarea proceselor de business pentru a
                crește eficiența firmei; Apelarea la surse de finanțare sigure
                care să protejeze afacerea de riscuri financiare; Investirea în
                soluții digitale pentru dezvoltarea activității desfășurate;
                Analiza portofoliului de clienți în vederea verificării
                respectării obligațiilor față de companie; Orientarea afacerii
                către mediul online pentru a garanta un flux de noi clienți. În
                prezent, firmele trebui să se adapteze la un mediu de afaceri
                mult mai competitiv și dinamic. Din acest motiv, este primordial
                să acorde atenție noilor schimbări din viața economică și să își
                adapteze strategia de afaceri ținând cont de factorii ce pot
                influența buna funcționare a activității. Totodată, este
                esențial ca firmele să valorifice oportunitățile ce se ivesc pe
                piața pe care activează.
              </p>
            </div>
            <img className="info-image" src="/assets/finance.png" alt="" />
          </div>

          <div className="info-section">
            <img
              className="info-image"
              src="/assets/business_decisions.png"
              alt=""
            />
            <div className="info-text">
              <h2 className="info-subtitle">
                Adaptarea business-ului la mediul de afaceri actual
              </h2>
              <p className="info-description">
                Pentru a face față tuturor provocărilor din mediul economic
                actual, companiile trebuie să-și alinieze business-ul la
                tendințele din piața în care activează. În vederea asigurării
                unei continuități a activității pe care o desfășoară,
                antreprenorii trebuie să își adapteze strategia de afaceri în
                contextul unei evoluții tehnologice generate de noile inovații
                apărute. Firmele au fost în situația de a-și regândi planul
                strategic de dezvoltare urmărind ca direcții de adaptare a
                afacerii:
                <br></br>
                <br></br>
                <li>
                  Diminuarea costurilor pentru a echilibra fluxul de numerar
                  necesar funcționării proceselor operaționale;
                </li>
                <li>
                  Realizarea unor produse/ servicii inovative în vederea
                  creșterii portofoliului;
                </li>
                <li>
                  Optimizarea proceselor de business pentru a crește eficiența
                  firmei;
                </li>
                <li>
                  Apelarea la surse de finanțare sigure care să protejeze
                  afacerea de riscuri financiare;
                </li>
                <li>
                  Investirea în soluții digitale pentru dezvoltarea activității
                  desfășurate;
                </li>
                <li>
                  Analiza portofoliului de clienți în vederea verificării
                  respectării obligațiilor față de companie;
                </li>
                <li>
                  Orientarea afacerii către mediul online pentru a garanta un
                  flux de noi clienți.
                </li>
                <br></br>
                <br></br> În prezent, firmele trebuie să se adapteze la un mediu
                de afaceri mult mai competitiv și dinamic. Din acest motiv, este
                primordial să acorde atenție noilor schimbări din viața
                economică și să își adapteze strategia de afaceri ținând cont de
                factorii ce pot influența buna funcționare a activității.
                Totodată, este esențial ca firmele să valorifice oportunitățile
                ce se ivesc pe piața pe care activează.
              </p>
            </div>
          </div>

          <div className="info-section">
            <div className="info-text">
              <h2 className="info-subtitle">Concluzii</h2>
              <p className="info-description">
                Schimbărilor apărute în mediul de afaceri au determinat firmele
                să se adapteze contextului nou al economiei pentru atingerea
                exigențelor pieței.
                <p id="5">
                  În prezent, companiile se confruntă cu numeroase provocări în
                  ceea ce privește:
                  <br></br>
                  <br></br>
                  <li> dezvoltarea afacerii;</li>
                  <li>concurența;</li>
                  <li>
                    comportamentul variabil al consumatorilor; menținerea
                    stabilă a cash-flow-ului.
                  </li>
                </p>
                <br></br>
                <br></br>Din perspectiva oportunităților, firmele își pot
                îmbunătăți procesele operaționale datorită digitalizării. Ca
                direcții strategice, agenții economici urmăresc o dezvoltare a
                relațiilor cu clienții și partenerii și totodată o stabilitate
                financiară. În acest sens, aceștia devin mult mai prudenți din
                perspectiva riscurilor financiare.
              </p>
            </div>
            <img className="info-image" src="/assets/conclusion.png" alt="" />
          </div>
        </div>
      </div>
      <Footer page="mda_ro" />
    </div>
  );
}

export default MDA_Ro;
