import Body from "./components/Body/bory";
import Button from "./components/Button/botao";
import Title from "./components/Title/title";

export default function App() {
  return (
    <div className="Container">
      <div className="Imagem">
        <img src="/poster.jpg" alt="" />
      </div>
      <div>
        <div className="BoxTitle">
          <Title />
        </div>
        <div className="BoxBody">
          <Body />
        </div>
        <div className="BoxButton">
          <Button />
        </div>
      </div>
    </div>
  );
}
