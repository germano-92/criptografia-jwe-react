import React, { useState } from "react";
import {
  AreaDeTexto,
  BotaoCript,
  BotaoDeCript,
} from "./components/ComponentesDoFormulario.js";
import { Estado } from "./interfaces/interfaceState.js";
import "./style.css";

export default function App() {
  const [state, setState] = useState<Estado>({
    texto: "",
    resultado: "",
    textinho: "Token",
  });
  const { resultado, textinho } = state;

  return (
    <div id="root">
      <div>
        <AreaDeTexto state={state} setState={setState} />
      </div>
      <div id="botoes">
        <BotaoCript state={state} setState={setState} />
        <BotaoDeCript state={state} setState={setState} />
      </div>

      {resultado && (
        <div>
          <h3>{textinho}</h3>
          <div id="tokenarea">
            <p className={resultado === "Erro" ? "erro" : ""}>{resultado}</p>
          </div>
          <img
            src="clipboard_paste.png"
            title="Copiar caso tenha copiado outra coisa por cima"
            alt="Copiar resultado"
            style={{ cursor: "pointer" }}
            onClick={() => navigator.clipboard.writeText(resultado)}
          />
        </div>
      )}
    </div>
  );
}
