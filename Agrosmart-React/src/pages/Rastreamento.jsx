import Maparotas from "../assets/images/MapaRotas.png";
import Agrobot from "../components/Agrobot/Agrobot";
import "../Css/Rastreamento.css";

function Rastreamento() {
  return (
    <main>
      <section className="section-rastreamento">
        <div className="display-container">
          <div className="tracking-infos">
            <h1>RASTREAMENTO DE ENTREGA</h1>
            <hr />
            <p>
              Acompanhe em tempo real o percurso da sua entrega, desde a origem
              até o destino final. Mais transparência, mais controle, menos
              desperdício.
            </p>
          </div>

          <div className="delivery-card">

            {/* icone do Caminhão  */}
            <div className="truck-icon-container">
              <i className="fa-solid fa-truck"></i>
            </div>

            {/* parte dos items encomendados */}
            <div className="delivery-infos">

              <div className="delivery-items">
                <h3>
                  Pedido <br /> <span>#AS47829</span>
                </h3>
                <p>Alface Crespa - 600KG</p>
              </div>

              <div className="delivery-items">
                <h3>Origem Sítio Boa Esperança</h3>
                <p>São José do Rio Preto - SP</p>
              </div>

              <div className="delivery-items">
                <h3>Destino Supermercado Verde Mais</h3>
                <p>São Paulo - SP</p>
              </div>
            </div>

          </div>
        </div>

        {/* parte do imagem com o mapa  */}
        <div className="map-title">
          <h2>Mapa da rota</h2>
        </div>
        <div className="tracking-map-container">
          <div className="tracking-map">
            <img src={Maparotas} alt="Mapa do trajeto" />
          </div>

          {/* card com detalhes do motorista*/}
          <div className="driver-datails">
            <h3>Informações da Entrega</h3>

            <div className="datails-items">

              {/* primeiro container  */}
              <div id="driver-details-container-1">

                {/* item-1  */}
                <div className="driver-subcontainer-1">

                  <div className="details-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>

                  <div className="datails-content">
                    <h3>Motorista</h3>
                    <p>João Marcos</p>
                  </div>

                </div>

                {/* item-2 */}
                <div className="driver-subcontainer-2">

                  <div className="details-icon">
                    <i className="fa-solid fa-truck"></i>
                  </div>

                  <div className="datails-content">
                    <h3>Veículo</h3>
                    <p>ABC-124</p>
                    <p>Caminhão Refrigerado</p>
                  </div>

                </div>
              </div>

              {/* segundo container  */}
              <div id="driver-details-container-2">

                {/* item-3  */}
                <div className="driver-subcontainer-3">

                  <div className="details-icon">
                    <i className="fa-solid fa-route"></i>
                  </div>

                  <div className="datails-content">
                    <h3>Distância Total</h3>
                    <p>445 KM</p>
                  </div>

                </div>

                {/* item-4  */}
                <div className="driver-subcontainer-4">
                
                  <div className="details-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>

                  <div className="datails-content">
                    <h3>Tempo Estimado</h3>
                    <p>5h 20min</p>
                    <p> <span> Previsão: 24/05 às 16:00 </span></p>
                  </div>
                  
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Agrobot />
    </main>
  );
}

export default Rastreamento;
