import "./Fqa.css";

function FAQ() {
  return (
    <>
      <div className="FQA-title">FAQ - Perguntas recorrentes</div>

      <div className="FQA-container">

        <div className="FQA-cards">
          <div className="FQA-pergunta">
            <p>
              “Como sei se este produto/serviço é adequado para o meu caso?”
            </p>
          </div>
          <div className="FQA-respostas">
            <p>
              “Nosso serviço foi pensado especialmente para pequenos produtores.
              Ele é ideal para você que busca redução do custo de transporte de
              alimentos e segurança no transporte. Se você precisa de eficiencia
              na produção, essa é a escolha certa. Caso tenha dúvidas sobre uma
              necessidade muito específica, nossa equipe está à disposição na
              seção de Fale Conosco para te orientar antes de da assinatura!”
            </p>
          </div>
        </div>

         <div className="FQA-cards">
          <div className="FQA-pergunta">
            <p>
              “Se eu tiver dúvidas durante o uso, como e em quanto tempo recebo suporte?”
            </p>
          </div>
          <div className="FQA-respostas">
            <p>
              “Você não estará sozinho! Nosso suporte atende via WhatsApp, E-mail, telefone e através do chat-bot na plataforma, de Segunda a Sábado, das 8h às 21h com acesso ao chat-bot 24h. O nosso tempo médio de resposta é de até 12h. Além disso, você tem acesso imediato à nossa central de ajuda com tutoriais na seção Home.”
            </p>
          </div>
        </div>

        <div className="FQA-cards">
          <div className="FQA-pergunta">
            <p>
             “Preciso ter conhecimento prévio ou alguma ferramenta específica para usar?”
            </p>
          </div>
          <div className="FQA-respostas">
            <p>
              “Não! O Agrosmart foi desenvolvido para ser simples e intuitivo, sem necessidade de experiência prévia. Tudo o que você precisa para começar é de acesso à internet. Nós fornecemos todo o passo a passo necessário para você aproveitar ao máximo desde o primeiro dia.”
            </p>
          </div>
        </div>















      </div>
    </>
  );
}

export default FAQ;
