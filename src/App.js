// import Component
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";
import NewChat from "./NewChat";
import Chat from "./Chat";

const App = () => {
  return (
    <BrowserRouter>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header />
            <div style={{ flexGrow: 1, display: "flex", flexDirection: "row" }}>
              <SideMenu />
              <div style={{ flexGrow: 1, flexShrink: 1, position: "relative" }}>
                <Routes>
                  <Route path="/" element={<NewChat />} />
                  <Route path="/chat" element={<Chat />} />
                </Routes>
              </div>
            </div>
        </div>
    </BrowserRouter >
  );
};

export default App;
