import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        This is children
      </Layout>
    </BrowserRouter>
  );
}

export default App;
