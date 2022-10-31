import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Timeline from "./components/about";
import Techonologies from "./components/technology";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer";
import Theme from "./styles/theme";

function App() {
  const [menuOpen, setMenuOpen] = useState<any>(false);
  return (
    <Theme>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Timeline />
          <Portfolio />
          <Techonologies />
          <div className="section-footer">
            <Footer />
          </div>
        </div>
      </div>
    </Theme>
  );
}

export default App;
