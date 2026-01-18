import { compactDecrypt, CompactEncrypt } from "jose";
const encoder = new TextEncoder();
const decoder = new TextDecoder();

// Se for browser, não use Buffer! Use Uint8Array
export const SECRET_HEX =
  "d90f6ae6b0717b9e6573ab0958145260118f5d03e45a31c5a06e2eb873659a9b";

function hexToUint8Array(hex: string): Uint8Array {
  if (hex.length % 2 !== 0) throw new Error("Hex inválido");
  const arr = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    arr[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return arr;
}

const SECRET_KEY = hexToUint8Array(SECRET_HEX);

export async function criptografar(texto: string): Promise<string> {
  const payload = encoder.encode(JSON.stringify(texto));
  const jwe = await new CompactEncrypt(payload)
    .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
    .encrypt(SECRET_KEY);
  return jwe;
}

export async function descriptografar(token: string): Promise<string | null> {
  try {
    const { plaintext } = await compactDecrypt(token, SECRET_KEY);
    return JSON.parse(decoder.decode(plaintext));
  } catch (err) {
    console.error("Token inválido ou expirado:", err);
    return null;
  }
}
