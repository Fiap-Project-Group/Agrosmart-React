import { useEffect, useRef, useState } from "react";
import "./Agrobot.css";

// Tempos das animações (mesmos do agrobot.js original)
const TEMPO_ANALISANDO = 1000;
const TEMPO_DIGITANDO = 1200;

// Respostas dos botões de atalho
const RESPOSTAS_ATALHO = {
  clima:
    "🌦️ Com base nos dados disponíveis, as condições climáticas atuais são favoráveis para atividades agrícolas.",
  rastreamento:
    "🚚 De acordo com as informações de rastreamento disponíveis, seu pedido está em processo de transporte e dentro do prazo estimado. Continue acompanhando as atualizações para verificar o andamento da entrega.",
  marketplace:
    "🛒 O marketplace da AgroSmart reúne uma variedade de produtos agrícolas, incluindo sementes, fertilizantes e equipamentos. Explore as opções disponíveis para encontrar soluções adequadas às necessidades da sua produção.",
  plantio:
    "🌱 Com base nas boas práticas agrícolas, recomenda-se avaliar a umidade do solo, as condições climáticas e o período ideal da cultura antes de iniciar o plantio, garantindo melhores resultados e produtividade.",
};

// Respostas para perguntas digitadas (palavra-chave → resposta)
const RESPOSTAS_DIGITADAS = [
  { chave: "clima", texto: "🌦️ As condições climáticas atuais são favoráveis." },
  { chave: "entrega", texto: "🚚 Sua entrega está em trânsito." },
  { chave: "marketplace", texto: "🛒 Temos diversos produtos disponíveis." },
  { chave: "plantio", texto: "🌱 Recomendamos verificar a umidade do solo antes do plantio." },
  { chave: "suporte", texto: "📞 Entre em contato pela página Fale Conosco." },
];

const RESPOSTA_PADRAO =
  "🤖 Ainda estou aprendendo. Tente perguntar sobre clima, entregas, plantio ou marketplace.";

const MENSAGENS_INICIAIS = [
  { id: 1, autor: "bot", texto: "Olá! Sou o AgroBot 🌱" },
  { id: 2, autor: "bot", texto: "Como posso ajudar?" },
];

function Agrobot() {
  const [aberto, setAberto] = useState(false);
  const [mensagens, setMensagens] = useState(MENSAGENS_INICIAIS);
  const [pergunta, setPergunta] = useState("");

  const areaMensagensRef = useRef(null);
  const proximoIdRef = useRef(MENSAGENS_INICIAIS.length + 1);
  const timersRef = useRef([]);

  // Rola até a última mensagem sempre que a lista muda
  useEffect(() => {
    const area = areaMensagensRef.current;
    if (area) area.scrollTop = area.scrollHeight;
  }, [mensagens]);

  // Cancela os timers pendentes se o componente for desmontado (troca de página)
  useEffect(() => {
    const timers = timersRef.current;
    return () => timers.forEach(clearTimeout);
  }, []);

  function novoId() {
    return proximoIdRef.current++;
  }

  function agendar(funcao, tempo) {
    timersRef.current.push(setTimeout(funcao, tempo));
  }

  function adicionarMensagem(autor, texto) {
    const id = novoId();
    setMensagens((atuais) => [...atuais, { id, autor, texto }]);
    return id;
  }

  function atualizarMensagem(id, alteracoes) {
    setMensagens((atuais) =>
      atuais.map((msg) => (msg.id === id ? { ...msg, ...alteracoes } : msg)),
    );
  }

  // "⏳ Analisando..." → indicador de digitação → resposta final
  function responderComAnimacao(resposta) {
    const id = adicionarMensagem("bot", "⏳ Analisando sua pergunta...");

    agendar(() => {
      atualizarMensagem(id, { digitando: true });

      agendar(() => {
        atualizarMensagem(id, { digitando: false, texto: resposta });
      }, TEMPO_DIGITANDO);
    }, TEMPO_ANALISANDO);
  }

  function respostaSuporte() {
    adicionarMensagem("usuario", "Suporte");
    adicionarMensagem(
      "bot",
      "📞 Você pode entrar em contato através da página Fale Conosco.",
    );
  }

  function enviarPergunta() {
    const texto = pergunta.trim();
    if (!texto) return;

    const textoMinusculo = texto.toLowerCase();
    const encontrada = RESPOSTAS_DIGITADAS.find(({ chave }) =>
      textoMinusculo.includes(chave),
    );

    adicionarMensagem("usuario", texto);
    adicionarMensagem("bot", encontrada ? encontrada.texto : RESPOSTA_PADRAO);
    setPergunta("");
  }

  function aoPressionarTecla(evento) {
    if (evento.key === "Enter") enviarPergunta();
  }

  return (
    <>
      <button
        id="agrobot-btn"
        onClick={() => setAberto(true)}
        aria-label="Abrir AgroBot"
      >
        <i className="fa-solid fa-seedling"></i>
      </button>

      <div id="agrobot-chat" className={aberto ? "active" : ""}>
        <div id="agrobot-header">
          <div id="agrobot-info">
            <span id="agrobot-title">
              <i className="fa-solid fa-seedling"></i> AgroBot IA
            </span>

            <small>● Online agora</small>
          </div>

          <button
            id="close-chat"
            onClick={() => setAberto(false)}
            aria-label="Fechar AgroBot"
          >
            ✕
          </button>
        </div>

        <div id="agrobot-messages" ref={areaMensagensRef}>
          {mensagens.map((msg) =>
            msg.digitando ? (
              <div className="typing" key={msg.id}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <div
                key={msg.id}
                className={msg.autor === "usuario" ? "user-message" : "bot-message"}
              >
                {msg.texto}
              </div>
            ),
          )}
        </div>

        <div id="agrobot-options">
          <button onClick={() => responderComAnimacao(RESPOSTAS_ATALHO.clima)}>
            🌦️ Clima
          </button>

          <button onClick={() => responderComAnimacao(RESPOSTAS_ATALHO.rastreamento)}>
            🚚 Entregas
          </button>

          <button onClick={() => responderComAnimacao(RESPOSTAS_ATALHO.marketplace)}>
            🛒 Marketplace
          </button>

          <button onClick={() => responderComAnimacao(RESPOSTAS_ATALHO.plantio)}>
            🌱 Plantio
          </button>

          <button onClick={respostaSuporte}>📞 Suporte</button>
        </div>

        <div id="agrobot-input-area">
          <input
            type="text"
            id="agrobot-input"
            placeholder="Digite sua pergunta..."
            value={pergunta}
            onChange={(evento) => setPergunta(evento.target.value)}
            onKeyDown={aoPressionarTecla}
          />

          <button onClick={enviarPergunta} aria-label="Enviar pergunta">
            ➤
          </button>
        </div>
      </div>
    </>
  );
}

export default Agrobot;
