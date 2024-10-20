import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef<any>();
  useGSAP(
    () => {
      gsap.fromTo(
        ".sun",
        { left: -200, opacity: 0 },
        {
          left: 0,
          opacity: 1,
          duration: 2,
        }
      );

      gsap.fromTo(
        ".sun",
        {},
        {
          top: -200,
          opacity: 0.2,
          duration: 2,
          scrollTrigger: {
            trigger: ".sun",
            start: 0,
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        "#section-1 h3",
        { opacity: 0, top: -10 },
        { opacity: 1, top: 0, duration: 2, delay: 2.4 }
      );

      gsap.fromTo(
        "#section-1 .connect .circle",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 1.5 }
      );

      gsap.fromTo(
        "#section-1 .connect .line",
        { width: 0 },
        { width: "20vw", opacity: 1, duration: 1.5 }
      );

      gsap.fromTo(
        "#section-1 .future-text, #section-1 .now-text",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 2 }
      );
    },
    { scope: container }
  );

  return (
    <>
      <nav className="main-menu">
        <img className="logo" src="http://localhost:5173/logo.svg" />
        <ul>
          <li>
            <a href="#section-2">O QUE FAZEMOS?</a>
          </li>
          <li>
            <a href="#section-3">ENTRE EM CONTATO</a>
          </li>
        </ul>
      </nav>
      <main ref={container}>
        <section id="section-1">
          <div className="sun"></div>
          <h3>Conectamos o futuro ao agora em cada linha código</h3>
          <div className="connect">
            <img
              className="future-text"
              src="http://localhost:5173/future-text.svg"
            />
            <div className="circle circle1"></div>
            <div className="line"></div>
            <div className="circle circle2"></div>
            <img
              className="now-text"
              src="http://localhost:5173/now-text.svg"
            />
          </div>
        </section>
        <section id="section-2">
          <div className="cols">
            <div className="col">
              <h2>COMO PODEMOS AJUDAR</h2>
              <p>
                <br />
                Ajudamos você a trazer suas ideias para o mundo digital,
                desenvolvendo soluções tecnológicas personalizadas, seja para
                aprimorar os processos da sua empresa ou criar um novo
                empreendimento.
              </p>
            </div>
            <div className="col">
              <h2>NOSSAS SKILLS</h2>
              <p>
                Javascript, <span>ReactJS</span>, CSS, Typescript,{" "}
                <span>NodeJS</span>, MongoDB, SQL,
                <span>React Native</span>, Html, NestJS...
              </p>
            </div>
          </div>
          <img className="banner" src="http://localhost:5173/banner.png" />
          {/* <div>
          </div> */}
        </section>
        <section id="section-3">
          <div className="cols">
            <div className="col">
              <h1>Estamos aqui para ajudar!</h1>
              <h4>
                Entre em contato conosco e responderemos o mais rápido possível.
              </h4>
            </div>
            <div className="col">
              <a href="#">
                <img
                  className="banner"
                  src="http://localhost:5173/whatsapp.png"
                />
              </a>
              <p>Telefone +55 85 99637 2253</p>
            </div>
          </div>
          {/* <div>
          </div> */}
        </section>
      </main>
    </>
  );
}

export default App;
