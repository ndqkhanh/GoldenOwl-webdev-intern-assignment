import { Grid } from "@mui/material";
import "./assets/css/App.css";
import TemplateCard from "./components/TemplateCard";

function App() {
  console.log("App");
  return (
    <div className="App">
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          maxWidth: "760px",
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Grid item xs={12} md={6}>
          <TemplateCard isOurProducts={true} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TemplateCard isOurProducts={false} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
