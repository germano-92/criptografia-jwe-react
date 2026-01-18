import { Estado } from "./interfaceState.js";

export interface ComponenteProps {
  state: Estado;
  setState: React.Dispatch<React.SetStateAction<Estado>>;
}
