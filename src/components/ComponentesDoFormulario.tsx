import { cript, decript, podeCriptar, podeDecriptar } from "@utils/funcoes.js";
import React from "react";
import { ComponenteProps } from "../interfaces/ComponenteProps.js";
export function AreaDeTexto({ state, setState }: ComponenteProps) {
  return (
    <textarea
      value={state.texto}
      style={{ padding: "10px" }}
      spellCheck="false"
      onChange={(e) => setState({ ...state, texto: e.target.value })}
      id="textarea"
    />
  );
}

export const BotaoCript: React.FC<ComponenteProps> = ({ state, setState }) => {
  return (
    <button
      disabled={!podeCriptar(state.texto)}
      onClick={() => cript({ state, setState })}
    >
      Cript
    </button>
  );
};

export const BotaoDeCript: React.FC<ComponenteProps> = ({
  state,
  setState,
}) => {
  return (
    <button
      disabled={!podeDecriptar(state.texto)}
      onClick={() => decript({ state, setState })}
    >
      Desvendar
    </button>
  );
};
