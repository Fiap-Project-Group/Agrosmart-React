import "./Chatbot.css"

function Chatbot(){
  return(
    <>
    <button id="agrobot-btn">
        <i class="fa-solid fa-seedling"></i>
    </button>

    <div id="agrobot-chat">

        <div id="agrobot-header">

            <div id="agrobot-info">

                <span id="agrobot-title">
                    <i class="fa-solid fa-seedling"></i>
                    AgroBot IA
                </span>

                <small>● Online agora</small>

            </div>

            <button id="close-chat">✕</button>

        </div>

        <div id="agrobot-messages">

            <div class="bot-message">
                Olá! Sou o AgroBot 🌱
            </div>


            <div class="bot-message">
                Como posso ajudar?
            </div>

        </div>

        <div id="agrobot-options">

            <button onclick="respostaClima()">
                🌦️ Clima
            </button>

            <button onclick="respostaRastreamento()">
                🚚 Entregas
            </button>

            <button onclick="respostaMarketplace()">
                🛒 Marketplace
            </button>

            <button onclick="respostaPlantio()">
                🌱 Plantio
            </button>

            <button onclick="respostaSuporte()">
                📞 Suporte
            </button>

        </div>

        <div id="agrobot-input-area">

            <input 
              type="text" 
              id="agrobot-input" 
              placeholder="Digite sua pergunta..."/>

            <button onclick="enviarPergunta()">
                ➤
            </button>

        </div>

    </div>
    </>
  );
}

export default Chatbot