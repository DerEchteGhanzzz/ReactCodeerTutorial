/* eslint-disable prefer-const */
import { balansColumnWidth, balansRowHeight } from "../data/BalaNS.const";
import type { MaterieelBalans } from "../data/BalaNS.types";

export default function MaterieelBalansTabel({
  materieelBalans,
}: {
  materieelBalans: MaterieelBalans;
}) {
  let tableColor = "#fff2c8";
  let textColor = "#6b6375";

  return (
    // <table> is een html tabel.
    // Deze heeft table rows (<tr>) met daarin table headers <th> en table datacells <td>
    <table
      style={{
        margin: "10px",
        border: "1px solid #060f2e1c",
        borderRadius: "25px",
        zIndex: -1,
        borderCollapse: "collapse",
        width: "400px",
      }}
    >
      <tr
        style={{
          backgroundColor: "#ebf5ff",
          borderBottom: "1px solid #060f2e1c",
          height: balansRowHeight,
        }}
      >
        <th style={{ width: balansColumnWidth }}>Opstarters</th>
        <th style={{ width: balansColumnWidth }}>Aflopers</th>
        <th style={{ width: balansColumnWidth }}>Delta</th>
      </tr>
      <tr
        style={{
          color: textColor,
          backgroundColor: tableColor,
          height: balansRowHeight,
        }}
      >
        <td>{materieelBalans.opstarters}</td>
        <td>{materieelBalans.aflopers}</td>
        <td>{materieelBalans.delta}</td>
      </tr>
    </table>
  );
}
