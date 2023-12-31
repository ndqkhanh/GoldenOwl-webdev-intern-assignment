import { Grid } from "@mui/material";
import "./assets/css/App.css";
import TemplateCard from "./components/TemplateCard";

function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          height: "100vh",
          maxWidth: "760px",
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          marginBottom: "30px",
        }}
      >
        <Grid item xs={12} md={6}>
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <TemplateCard isOurProducts={true} />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <TemplateCard isOurProducts={false} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
