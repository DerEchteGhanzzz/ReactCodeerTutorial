/* eslint-disable prefer-const */
import type { MaterieelBalans, MaterieelDienst } from "../data/BalaNS.types";

export function berekenBalans(
  dienstregelpunt: string,
  diensten: MaterieelDienst[],
): MaterieelBalans {
  /**
   * 'if statement', als wat tussen de haken staat waar is, voer het uit.
   * In dit geval, als het dienstregelpunt een lege string is,
   * geef dan gewoon alleen maar nullen terug.
   * (we hoeven toch niets te berekenen)
   */
  if (dienstregelpunt === "") {
    return { opstarters: 0, aflopers: 0, delta: 0 };
  }

  // variabele declaraties - kies een startwaarde voor opstarters en aflopers
  let opstarters: number = undefined;
  let aflopers: number = undefined;

  // 'for loop' bekijk elk element van een lijst
  for (let dienst of diensten) {
    /**
     * Voeg je eigen code toe.
     * We willen graag voor elke dienst weten of deze opstart of afloopt in 'dienstregelpunt'
     * Als dat zo is, willen we dat graag ergens noteren.
     */
  }

  let delta: number = undefined;

  // 'return statement' wat de functie teruggeeft na de berekening
  return { opstarters, aflopers, delta };
}
