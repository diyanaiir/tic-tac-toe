import GameBoard from "./components/GameBoard";
import { WebSocketProvider } from "./WebSocketContext";
import "./App.css";

function App() {
  return (
    <WebSocketProvider>
      <GameBoard />
      <div className="footer"><p>Made by-</p>
      <p>Diya Nair</p>
      <p>Shaurya Jindal</p>
      <p>Ankit Tojo</p>
      <p>Kartikey Pandey </p>
      </div>
    </WebSocketProvider>
  );
}

export default App;
