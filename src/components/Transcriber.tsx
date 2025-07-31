import React, { useState } from "react";
import "./Transcriber.css";

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

const Transcriber: React.FC = () => {
  const [text, setText] = useState("");
  const [listening, setListening] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleStart = () => {
    if (!SpeechRecognition) {
      alert("Seu navegador não suporta reconhecimento de voz.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "pt-BR";
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
      setSuccessMessage("Texto transcrito com sucesso!");
    };

    recognition.onend = () => setListening(false);

    recognition.onerror = (event: Event) => {
      const e = event as any;
      console.error("Erro no reconhecimento:", e.error);
      setListening(false);
    };

    recognition.start();
  };

  const handleClear = () => {
    setText("");
    setSuccessMessage("");
  };

  return (
    <div className="transcriber-container">
      <h2>Transcrição de Áudio</h2>
      <textarea
        className={text ? "has-text" : ""}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Clique no botão para começar a transcrever..."
      />
      <div className="buttons-container">
        <button onClick={handleStart} disabled={listening}>
          {listening ? "Ouvindo..." : "Iniciar"}
        </button>
        <button onClick={handleClear}>Limpar</button>
      </div>
      {successMessage && <div id="success-message">{successMessage}</div>}
    </div>
  );
};

export default Transcriber;
