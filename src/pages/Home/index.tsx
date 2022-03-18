import React from "react";
import "assets/styles/custom.scss";
import "App.css";
import Navbar from "components/Navbar";
import { ReactComponent as Image } from "assets/images/main-home.svg";
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Conheça Nosso catalogo de Produtos</h1>
            <div className="home-image-container">
                <Image/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
