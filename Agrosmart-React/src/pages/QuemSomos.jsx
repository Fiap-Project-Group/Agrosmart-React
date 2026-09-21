import QuemSomosImg from "../assets/images/QuemSomos-image.jpg";
import Chatbot from "../components/Chatbot/Chatbot"
import FAQ from "../components/FAQ/Fqa";
import "../Css/QuemSomos.css";

function QuemSomos() {
  return (
    <main>
      <section className="section-quem-somos">
        <div className="quem-somos-texts">
          <div className="quem-somos-titles">
            <h2>Quem Somos?</h2>
            <h1>Tecnologia que alimenta conexões e transforma o campo</h1>
            <hr />
          </div>
          <div className="paragrath-container">
            <p className="paragrath" id="p1">
              A AgroSmart nasceu com o propósito de transformar a logística
              agrícola por meio da tecnologia, conectando produtores e
              consumidores de forma mais inteligente, sustentável e eficiente.
              Nosso foco é combater o desperdício de alimentos e promover uma
              agricultura mais moderna, alinhada aos Objetivos de
              Desenvolvimento Sustentável da ONU, especialmente a ODS 2 — Fome
              Zero e Agricultura Sustentável.
            </p>
            <p className="paragrath" id="p2">
              Desenvolvemos uma plataforma digital que utiliza inteligência de
              dados para auxiliar pequenos produtores rurais na tomada de
              decisões estratégicas, oferecendo recursos como monitoramento
              climático, análise do solo, recomendações de plantio e
              rastreamento logístico em tempo real.
            </p>
            <p className="paragrath" id="p3">
              Acreditamos que a tecnologia pode reduzir perdas alimentares,
              melhorar a distribuição de produtos e fortalecer a renda de
              produtores rurais, criando uma cadeia de abastecimento mais
              sustentável e acessível para todos. Nossa missão é unir inovação,
              sustentabilidade e impacto social em uma única solução.
            </p>
          </div>
        </div>
        <div className="quem-somos-img">
          <img src={QuemSomosImg} alt="Imagem de uma folha" />
        </div>
      </section>
      <section>
        <FAQ/>
      </section>
      <Chatbot/>
    </main>
  );
}

export default QuemSomos;
