import "./App.css";
import MaterieelBalansContainer from "./pages/MaterieelBalans";
import PageHeader from "./pages/PageHeader";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "10px",
      }}
    >
      <PageHeader />
      <MaterieelBalansContainer />
    </div>
  );
}

export default App;
