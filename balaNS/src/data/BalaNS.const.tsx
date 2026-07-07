/* eslint-disable prefer-const */
export const balansColumnWidth = "100px";
export const balansRowHeight = "32px";

import materieelDiensten from "./materieelDiensten.json";

export function getDienstregelpunten(): Set<string> {
  let dienstregelpunten = new Set<string>();
  for (let dienst of getDiensten()) {
    if (!dienstregelpunten.has(dienst.aankomst)) {
      dienstregelpunten.add(dienst.aankomst);
    }
    if (!dienstregelpunten.has(dienst.vertrek)) {
      dienstregelpunten.add(dienst.vertrek);
    }
  }
  console.log(dienstregelpunten);
  return dienstregelpunten;
}

export function getDiensten() {
  return materieelDiensten;
}
