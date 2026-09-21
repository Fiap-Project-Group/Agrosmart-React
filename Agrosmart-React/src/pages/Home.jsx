import ImageHome from "../assets/images/Home-image.jpg";
import Chatbot from "../components/Chatbot/Chatbot"
import "../Css/Home.css";

function Home() {
  return (
    <main>
      <section className="section">
        {/* plataform introduction */}

        <div className="container-introduction">
          <h1>Tecnologia que alimenta o futuro</h1>
          <p className="p-home-introduction">
            O AgroSmart conecta pequenos produtores rurais à inteligência de
            dados — previsão climática, gestão da produção e marketplace direto.
            Menos desperdício. Mais colheita. Mais vida.
          </p>
          <p className="plataform-guide">
            Acesse - <a href="#">Guia da Plataforma (add)</a>
          </p>
          <div className="image-home">
            <img src={ImageHome} alt="Imagem de um Agricultor trabalhando" />
          </div>
        </div>

        {/* introduction of weather */}

        <div>
          <div className="weather-introduction">
            <div className="leaf-container">
              <i id="leaf-icon" className="fa-solid fa-leaf"></i>
            </div>
            <div className="weather-text">
              <h2>Clima</h2>
              <p>
                Acompanhe as condições climáticas e veja se o clima está bom
                para o plantio
              </p>
            </div>
          </div>

          {/* introduction of cards */}

          <div className="cards-container">
            <div className="cards">
              {/* first-card */}

              <div className="cards-header">
                <i id="icon-1" className="fa-solid fa-cloud-sun-rain"></i>
                <h3>Condições Atuais</h3>
              </div>

              <div className="cards-infos">
                <div className="info-row">
                  <p className="info-label">Temperatura:</p>
                  <span className="info-value">24 °C</span>
                </div>

                <div className="info-row">
                  <p className="info-label">Umidade no Ar:</p>
                  <span className="info-value">68%</span>
                </div>

                <div className="info-row">
                  <p className="info-label">Precipitação:</p>
                  <span className="info-value">5 mm</span>
                </div>

                <div className="info-row">
                  <p className="info-label">Vento:</p>
                  <span className="info-value">12km/h</span>
                </div>

                <div className="info-row">
                  <p className="info-label">Radiação Solar:</p>
                  <span className="info-value">Alta</span>
                </div>
              </div>
            </div>
            {/* second-card */}
            <div className="cards">
              <div className="cards-header">
                <i id="icon-2" className="fa-solid fa-seedling"></i>
                <h3>Condições Atuais</h3>
              </div>

              <div className="cards-infos">
                <div className="planting-row">
                  <div>
                    <p className="planting-title">Temperatura Ideal :</p>
                    <p className="planting-text">18°C - 30°C</p>
                  </div>

                  <div className="check-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>

                <div className="planting-row">
                  <div>
                    <p className="planting-title">Umidade no Ar Ideal:</p>
                    <p className="planting-text">40% - 80%</p>
                  </div>

                  <div className="check-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>

                <div className="planting-row">
                  <div>
                    <p className="planting-title">Precipitação Ideal</p>
                    <p className="planting-text">0 mm - 20 mm</p>
                  </div>

                  <div className="check-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>

                <div className="planting-row">
                  <div>
                    <p className="planting-title">Vento Ideal</p>
                    <p className="planting-text">0km/h - 20km/h</p>
                  </div>

                  <div className="check-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Chatbot/>
    </main>
  );
}

export default Home;
