import React from "react";
import "assets/styles/custom.scss";
import "App.css";
import { ReactComponent as Image } from "assets/images/main-home.svg";
import "./styles.css";
import ButtonIcon from "components/ButtonIcons";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça Nosso Catálogo de Produtos</h1>
          </div>
          <p>Ajudaremos você a encontrar os melhores produtos</p>
          <NavLink to="/products">
            <ButtonIcon />
          </NavLink>
        </div>

        <div className="home-image-container">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default Home;
