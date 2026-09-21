import "../Css/Marketplace.css";
import SementeSoja from "../assets/images/products-imgs/SementeSoja-image.jpg";
import FertilizanteYara from "../assets/images/products-imgs/FertilizanteYara-image.jpg";
import TratorAgricola from "../assets/images/products-imgs/TratorAgricola-image.jpg";
import Sprinkler from "../assets/images/products-imgs/Sprinkler-image.jpg";
import Herbicida from "../assets/images/products-imgs/Herbicida-image.jpg";
import Pulverizador from "../assets/images/products-imgs/PulverizadorAgricola-image.jpg";
import RacaoPremium from "../assets/images/products-imgs/RacaoPremium-image.jpg";
import Drone from "../assets/images/products-imgs/Drone-image.jpg";
import FertilizanteOrganico from "../assets/images/products-imgs/FertilizanteOrganico-image.jpg";
import kitPlantio from "../assets/images/products-imgs/KitDePlantio-image.jpg";
import Motobomba from "../assets/images/products-imgs/MotoBomba.jpg";
import EstacaoMeteologica from "../assets/images/products-imgs/EstacaoMeteologica-image.jpg";

import Chatbot from "../components/Chatbot/Chatbot"



function Marketplace() {
  return (
    <main>
      <section className="section-marketplace">
        <div className="marketplace-texts">
          <h1>Marketplace</h1>
          <p>Encontre produtos, insumos e serviços para sua produção</p>
        </div>
        <div className="products">
          {/* Sementes de soja premium  */}
          <div className="product-card" id="card-1">
            <img src={SementeSoja} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>Sementes</span>
              <h5>Semente de Soja Premium</h5>
              <p>Alta produtividade e resistência climática.</p>
              <h3>R$ 450,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>

          {/* Fertilizante Yara  */}
          <div className="product-card" id="card-2">
            <img src={FertilizanteYara} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>Fertilizantes</span>
              <h5>Fertilizante Yara</h5>
              <p>Nutrição ideal para aumento da produção.</p>
              <h3>R$ 210,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          {/* TratorAgricola  */}
          <div className="product-card" id="card-3">
            <img src={TratorAgricola} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>Equipamentos</span>
              <h5>Trator Agrícola</h5>
              <p>Potência e eficiência para grandes áreas.</p>
              <h3>R$ 215.000,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>

          <div className="product-card" id="card-4">
              <img src={Sprinkler} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>Irrigação</span>
              <h5>Kit de Irrigação</h5>
              <p>Sistema completo para irrigação inteligente.</p>
              <h3>R$ 980,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>


          <div className="product-card" id="card-5">
                <img src={Herbicida} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>Defensivos</span>
              <h5>Herbicida Agrícola</h5>
              <p>Controle eficiente de ervas daninhas na lavoura.</p>
              <h3>R$ 320,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>

          </div>
          <div className="product-card" id="card-6">


                <img src={Pulverizador} alt="Sementes de Soja" />

            <div className="product-informations">
              <span> Máquinas</span>
              <h5> Pulverizador Agrícola</h5>
              <p>  Aplicação precisa para maior eficiência no campo.</p>
              <h3>R$ 12.500,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <div className="product-card" id="card-7">


                <img src={RacaoPremium} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>  Pecuária</span>
              <h5>Ração Premium</h5>
              <p>  Nutrição balanceada para melhor desempenho animal.</p>
              <h3>    R$ 180,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <div className="product-card" id="card-8">

            <img src={Drone} alt="Sementes de Soja" />

            <div className="product-informations">
              <span> Tecnologia</span>
              <h5>  Drone Agrícola</h5>
              <p> Monitoramento inteligente para grandes plantações.</p>
              <h3> R$ 8.900,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <div className="product-card" id="card-9">


              <img src={FertilizanteOrganico} alt="Sementes de Soja" />

            <div className="product-informations">
              <span> Fertilizantes</span>
              <h5>Fertilizante Orgânico</h5>
              <p>Melhora a qualidade do solo e aumenta a produtividade.</p>
              <h3>R$ 275,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <div className="product-card" id="card-10">


            <img src={kitPlantio} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>  Jardinagem</span>
              <h5>Kit de Plantio</h5>
              <p> Ferramentas essenciais para cultivo e manutenção.</p>
              <h3>R$ 145,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <div className="product-card" id="card-11">
            <img src={Motobomba} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>Equipamentos</span>
              <h5>Motobomba Rural</h5>
              <p> Ideal para irrigação e abastecimento de água.</p>
              <h3> R$ 2.450,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>
          <div className="product-card" id="card-12">
            <img src={EstacaoMeteologica} alt="Sementes de Soja" />

            <div className="product-informations">
              <span>Tecnologia</span>
              <h5> Estação Meteorológica</h5>
              <p> Dados climáticos precisos para tomada de decisões.</p>
              <h3>  R$ 3.990,00</h3>

              <div className="btn-container">
                <button className="btn-buy">
                  <i className="fa-solid fa-cart-shopping"></i>
                  Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Chatbot/>
    </main>
  );
}

export default Marketplace;
