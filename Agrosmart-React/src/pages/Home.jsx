import ImageHome from "../assets/images/Home-image.jpg";
import Agrobot from "../components/Agrobot/Agrobot"
import "../Css/Home.css";
import { useEffect, useState } from "react";

const CIDADE = "São José do Rio Preto - SP";
const LATITUDE = -20.82;
const LONGITUDE = -49.38;

const URL_CLIMA = `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&current=temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,uv_index&timezone=America/Sao_Paulo`;

const IDEAL = {
  temperatura: { min: 18, max: 30 },
  umidade: { min: 40, max: 80 },
  chuva: { min: 0, max: 20 },
  vento: { min: 0, max: 20 },
};

function dentroDaFaixa(valor, faixa) {
  return valor >= faixa.min && valor <= faixa.max;
}

function textoRadiacao(uv) {
  if (uv < 3) return "Baixa";
  if (uv < 6) return "Moderada";
  if (uv < 8) return "Alta";
  return "Muito alta";
}

function Home() {
  const [clima, setClima] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch(URL_CLIMA)
      .then((res) => res.json())
      .then((data) => {
        if (data.current) {
          setClima(data.current);
        } else {
          setErro(true);
        }
        setCarregando(false);
      })
      .catch(() => {
        setErro(true);
        setCarregando(false);
      });
  }, []);

  const temperaturaOk = clima && dentroDaFaixa(clima.temperature_2m, IDEAL.temperatura);
  const umidadeOk = clima && dentroDaFaixa(clima.relative_humidity_2m, IDEAL.umidade);
  const chuvaOk = clima && dentroDaFaixa(clima.precipitation, IDEAL.chuva);
  const ventoOk = clima && dentroDaFaixa(clima.wind_speed_10m, IDEAL.vento);
  const plantioRecomendado = temperaturaOk && umidadeOk && chuvaOk && ventoOk;

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
            Acesse -{" "}
            <a
              href="https://youtu.be/eGh14mnrLyc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guia da Plataforma
            </a>
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
              {carregando && (
                <p className="weather-status">Buscando o clima de agora...</p>
              )}
              {erro && (
                <p className="weather-status weather-error">
                  Não conseguimos carregar o clima agora. Atualize a página em
                  alguns minutos.
                </p>
              )}
              {clima && (
                <p className="weather-status">
                  Dados em tempo real de {CIDADE}
                </p>
              )}
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
                  <span className="info-value">
                    {clima ? `${Math.round(clima.temperature_2m)} °C` : "--"}
                  </span>
                </div>

                <div className="info-row">
                  <p className="info-label">Umidade no Ar:</p>
                  <span className="info-value">
                    {clima ? `${clima.relative_humidity_2m}%` : "--"}
                  </span>
                </div>

                <div className="info-row">
                  <p className="info-label">Precipitação:</p>
                  <span className="info-value">
                    {clima ? `${clima.precipitation} mm` : "--"}
                  </span>
                </div>

                <div className="info-row">
                  <p className="info-label">Vento:</p>
                  <span className="info-value">
                    {clima ? `${Math.round(clima.wind_speed_10m)} km/h` : "--"}
                  </span>
                </div>

                <div className="info-row">
                  <p className="info-label">Radiação Solar:</p>
                  <span className="info-value">
                    {clima ? textoRadiacao(clima.uv_index) : "--"}
                  </span>
                </div>
              </div>
            </div>
            {/* second-card */}
            <div className="cards">
              <div className="cards-header">
                <i id="icon-2" className="fa-solid fa-seedling"></i>
                <h3>Condições Ideais para Plantio</h3>
              </div>

              <div className="cards-infos">
                <div className="planting-row">
                  <div>
                    <p className="planting-title">Temperatura Ideal :</p>
                    <p className="planting-text">18°C - 30°C</p>
                  </div>

                  {clima && (
                    <div className={temperaturaOk ? "check-icon" : "check-icon fora-ideal"}>
                      <i className={temperaturaOk ? "fa-solid fa-check" : "fa-solid fa-xmark"}></i>
                    </div>
                  )}
                </div>

                <div className="planting-row">
                  <div>
                    <p className="planting-title">Umidade no Ar Ideal:</p>
                    <p className="planting-text">40% - 80%</p>
                  </div>

                  {clima && (
                    <div className={umidadeOk ? "check-icon" : "check-icon fora-ideal"}>
                      <i className={umidadeOk ? "fa-solid fa-check" : "fa-solid fa-xmark"}></i>
                    </div>
                  )}
                </div>

                <div className="planting-row">
                  <div>
                    <p className="planting-title">Precipitação Ideal</p>
                    <p className="planting-text">0 mm - 20 mm</p>
                  </div>

                  {clima && (
                    <div className={chuvaOk ? "check-icon" : "check-icon fora-ideal"}>
                      <i className={chuvaOk ? "fa-solid fa-check" : "fa-solid fa-xmark"}></i>
                    </div>
                  )}
                </div>

                <div className="planting-row">
                  <div>
                    <p className="planting-title">Vento Ideal</p>
                    <p className="planting-text">0km/h - 20km/h</p>
                  </div>

                  {clima && (
                    <div className={ventoOk ? "check-icon" : "check-icon fora-ideal"}>
                      <i className={ventoOk ? "fa-solid fa-check" : "fa-solid fa-xmark"}></i>
                    </div>
                  )}
                </div>

                {clima && (
                  <p
                    className={
                      plantioRecomendado
                        ? "planting-verdict"
                        : "planting-verdict verdict-alert"
                    }
                  >
                    {plantioRecomendado
                      ? "Clima favorável para o plantio hoje."
                      : "Atenção: alguma condição está fora do ideal. Avalie antes de plantar."}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Agrobot />
    </main>
  );
}

export default Home;
