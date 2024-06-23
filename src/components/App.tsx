import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="-0">
      <NavBar />

      <h1 className="text-xl font-black font-90">
        Vite + React + Electron + TailwindCSS App
      </h1>

      <p className="read-the-docs mt-[200px]">
        <Link className="hover:text-blue-300 hover:cursor-pointer transition-all duration-100" to="/dashboard">Click here to go to the dashboard</Link>
      </p>
    </div>
  );
}

export default App;
