import "./App.css";
import { Login } from "./Login";
import { Card } from "./Card";
import Footer from "./Footer";
import logo from "./assets/grupo3SoulCode.png";

function App() {
  return (
    <>
      <Login />
      <h2 className="h3">Galeria de fotos:</h2>
      <Card src="https://chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg" />
      <Card src="https://ichef.bbci.co.uk/news/640/cpsprodpb/b783/live/1642f900-b202-11ed-a285-f3500b8cf3cd.jpg" />
      <Card src="https://chefbob.com.br/wp-content/uploads/2021/05/2021-05-12-como-deixar-os-gatos-mais-tranquilos.jpg" />
      <Card src="https://ichef.bbci.co.uk/news/640/cpsprodpb/b783/live/1642f900-b202-11ed-a285-f3500b8cf3cd.jpg" />
      <Footer />
    </>
  );
}

export default App;
