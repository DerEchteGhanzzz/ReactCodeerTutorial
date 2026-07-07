/* eslint-disable prefer-const */
import { useState } from "react";
import type { MaterieelBalans } from "../data/BalaNS.types";
import { getDiensten, getDienstregelpunten } from "../data/BalaNS.const";
import MaterieelBalansTabel from "./MaterieelBalansTabel";
import { berekenBalans } from "./BalansBerekening";

export default function MaterieelBalansContainer() {
  const [drglpunt, setDrglpunt] = useState("");

  const handleSubmit = (
    event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setDrglpunt(value);
  };

  let materieelDiensten = getDiensten();

  // berekenBalans() geeft een object terug. Dit object bestaat uit 3 getallen:
  // opstarters, aflopers en delta.
  const materieelBalans: MaterieelBalans = berekenBalans(
    drglpunt,
    materieelDiensten,
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label style={{ margin: "10px" }}>
        Voer dienstregelpunt in:{" "}
        <input
          name="materieelBalansInput"
          value={drglpunt}
          onChange={handleSubmit}
        ></input>
      </label>
      <label>Kies uit: {Array.from(getDienstregelpunten()).join(", ")}</label>
      <MaterieelBalansTabel
        // hier geven we onze materieel balans mee aan de MaterieelBalansTabel
        materieelBalans={materieelBalans}
      />
    </div>
  );
}
