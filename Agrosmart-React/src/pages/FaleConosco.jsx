import FaleConoscoIMG from "../assets/images/FaleConosco-image.jpg";
import Agrobot from "../components/Agrobot/Agrobot"
import "../Css/FaleConosco.css";
import { useState } from "react";

function FaleConosco() {
  const [nome, setnome] = useState("")
  const [enviado , setEnvido] = useState(false)

  function handleSubmit(event){
    event.preventDefault();
    const partes = nome.trim().split(/\s+/);

    if (partes.length < 2){
      alert("Digite nome e sobrenome!");
      return;
    }
    const nomeValido = partes.every((parte) => parte.length >= 2);
    
    if (!nomeValido){
      alert("Nome e sobrenome devem ter pelo menos 2 letras")
      return;
    }
    setnome("");
    setEnvido(true );
    console.log("Formulário enviado com sucesso!")
  }

  return (
    <main>
      <section className="section-FaleConosco">
        <div>
          {/* infomações sobre contato  */}
          <div className="contact-texts">
            <h2>Fale Conosco</h2>
            <h1>Vamos Conversar?</h1>
            <hr />
            <p>
              Tem dúvidas, sugestões ou quer saber mais sobre a AgroSmart?
              Preencha o formulário ou utilize nossos canais de atendimento.
              Nossa equipe está pronta para ajudar você a transformar o campo
              com tecnologia, inovação e soluções inteligentes para uma produção
              mais eficiente e sustentável.
            </p>
            <p>
              Entre em contato para conhecer melhor nossos serviços, tirar
              dúvidas sobre monitoramento, rastreamento e gestão agrícola, ou
              descobrir como a AgroSmart pode facilitar o dia a dia no
              agronegócio. Será um prazer conversar com você e encontrar a
              melhor solução para sua necessidade.
            </p>
          </div>

          {/* dados de contato  */}
          <div className="contact-channel">
            <h3>Canais de atendimento</h3>
            <div className="contact-info-layout">
              <div>
                <h4>Telefone</h4>
                <p>(11) 12345-6789</p>
              </div>

              <div>
                <h4>Whatsapp</h4>
                <p>(11) 12345-6789</p>
              </div>

              <div>
                <h4>Email</h4>
                <p>email@email.com</p>
              </div>

              <div>
                <h4>Horário de Atendimento</h4>
                <p>Segunda a Sexta, das 8h às 18h</p>
              </div>
            </div>
          </div>

          {/* form de contato  */}
          <div className="contact-form">
            <h3>Mande sua Mensagem</h3>

            <div className="form-to-contact">
              {enviado ? (<p>Formulário enviado com sucesso!</p>): (
              <form onSubmit={handleSubmit}>
                <div className="form-input-container">
                  <input
                    type="text"
                    name="Nome"
                    value={nome}
                    onChange={(event) => setnome(event.target.value)}
                    className="form-input"
                    id="name"
                    required
                    placeholder="Digite nome e sobrenome"
                  />
               
                  <input
                    type="Email"
                    name="email"
                    className="form-input"
                    id="email"
                    required
                    placeholder="Informe seu email"
                  />

                  <input
                    name="message"
                    className="text-area-message"
                    required
                    maxLength={500}
                    placeholder="Conte-nos sua mensagem!"
                  />

                  <div className="button-container">
                    <button type="submit">Enviar</button>
                  </div>
                </div>
              </form>
              )}
            </div>
          </div>
        </div>
        <div className="FaleConosco-img">
          <img src={FaleConoscoIMG} alt="imagem de uma atendente" />
        </div>
      </section>
      <Agrobot />
    </main>
  );
}

export default FaleConosco;
