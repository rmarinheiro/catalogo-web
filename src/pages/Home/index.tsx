import React from "react";
import "assets/styles/custom.scss";
import "App.css";
import Navbar from "components/Navbar";
import { ReactComponent as Image } from "assets/images/main-home.svg";
import "./styles.css";
import ButtonIcon from "components/ButtonIcons";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça Nosso Catálogo de Produtos</h1>
            </div>
            <p>Ajudaremos você a encontrar os melhores produtos</p>
            <ButtonIcon />
          </div>
          <div className="home-image-container">
            <Image />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
