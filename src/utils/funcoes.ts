import { criptografar, descriptografar } from "../crypto.js";
import { ComponenteProps } from "../interfaces/ComponenteProps.js";

export async function decript({ state, setState }: ComponenteProps) {
  const original = await descriptografar(state.texto);
  setState({
    texto: "",
    resultado: original || "Erro",
    textinho: "Texto original",
  });
}

export async function cript({ state, setState }: ComponenteProps) {
  if (state.texto.trim().length === 0) {
    //setState({ ...state, resultado: "" });
    setState((prev) => ({ ...prev, resultado: "" }));
    return;
  }

  const token = await criptografar(state.texto);
  setState({
    texto: "",
    resultado: token || "Erro",
    textinho: "Token",
  });
  navigator.clipboard.writeText(token);

  if (Notification.permission === "granted") {
    new Notification("Token copiado para área de transferência");
  } else {
    Notification.requestPermission().then((permission) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      permission === "granted" &&
        new Notification("Token copiado para área de transferência");
    });
  }
}

export function podeCriptar(texto: string): boolean {
  return !!texto && !texto.startsWith("eyJh");
}

export function podeDecriptar(texto: string) {
  return !!texto && texto.length >= 80 && texto.match(/\./g)?.length === 4;
}
