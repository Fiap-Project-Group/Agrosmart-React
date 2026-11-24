import FaleConoscoIMG from "../assets/images/FaleConosco-image.jpg";
import Agrobot from "../components/Agrobot/Agrobot";
import "../Css/FaleConosco.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    nome: yup
      .string()
      .trim()
      .required("Conte pra gente como você se chama.")
      .matches(/^\S{2,}(\s+\S{2,})+$/, "Informe seu nome e sobrenome."),
    email: yup
      .string()
      .required("Informe um e-mail para podermos responder.")
      .email("Confira o e-mail: ele precisa ter o formato nome@exemplo.com."),
    mensagem: yup
      .string()
      .trim()
      .required("Escreva sua mensagem.")
      .min(10, "Escreva um pouco mais (mínimo de 10 caracteres).")
      .max(500, "Sua mensagem pode ter até 500 caracteres."),
  })
  .required();

function FaleConosco() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [enviado, setEnviado] = useState(false);
  const [primeiroNome, setPrimeiroNome] = useState("");

  function enviarMensagem(dados) {
    console.log("Mensagem enviada:", dados);
    setPrimeiroNome(dados.nome.split(" ")[0]);
    setEnviado(true);
    reset();
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
              {enviado ? (
                <div className="form-success">
                  <p>
                    Mensagem enviada! Obrigado, {primeiroNome}. Nossa equipe
                    responde em até 1 dia útil no e-mail informado.
                  </p>
                  <div className="button-container">
                    <button type="button" onClick={() => setEnviado(false)}>
                      Enviar outra
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(enviarMensagem)} noValidate>
                  <div className="form-input-container">
                    <div className="form-field">
                      <input
                        type="text"
                        {...register("nome")}
                        className="form-input"
                        id="name"
                        placeholder="Nome e sobrenome"
                      />
                      <span className="form-error">{errors.nome?.message}</span>
                    </div>

                    <div className="form-field">
                      <input
                        type="email"
                        {...register("email")}
                        className="form-input"
                        id="email"
                        placeholder="Seu melhor e-mail"
                      />
                      <span className="form-error">{errors.email?.message}</span>
                    </div>

                    <div className="form-field form-field-full">
                      <textarea
                        {...register("mensagem")}
                        className="text-area-message"
                        id="message"
                        maxLength={500}
                        placeholder="Como podemos ajudar?"
                      />
                      <span className="form-error">
                        {errors.mensagem?.message}
                      </span>
                    </div>

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
