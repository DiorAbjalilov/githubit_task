import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profil from "./components/profil/Profil";
import "./styles/basicStyle.css";
function App() {
  return (
    <>
      <section className="basic_body">
        <nav className="basic_navbar">
          <Navbar />
        </nav>
        <header className="profil_header">
          <div className="profil_block">
            <Profil />
          </div>
          <div className="header_block">
            <Header />
          </div>
        </header>
      </section>
    </>
  );
}

export default App;
