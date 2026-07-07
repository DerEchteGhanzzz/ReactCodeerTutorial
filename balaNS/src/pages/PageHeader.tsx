import { LogoBalaNS } from "../assets/LogoBalaNS";

export default function PageHeader() {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#ebf5ff",
        borderRadius: "25px",
      }}
    >
      <label
        style={{
          fontSize: "64px",
          fontWeight: "600",
          color: "#0a3680",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            marginRight: "24px",
            alignContent: "center",
          }}
        >
          BalaNS
        </span>
        <figure
          style={{
            height: "64px",
            width: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            zIndex: "0",
            position: "relative",
            margin: "0",
          }}
        >
          <LogoBalaNS />
        </figure>
      </label>
    </div>
  );
}
