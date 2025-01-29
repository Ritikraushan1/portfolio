import { useState } from "react";
import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./Styles/app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Work />
      <Timeline />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Chatbot Button & Iframe */}
      <div className="chatbot-container">
        {!showChatbot ? (
          <button className="chatbot-button" onClick={() => setShowChatbot(true)}>
            💬 Chat
          </button>
        ) : (
          <iframe
            className="chatbot-iframe"
            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/01/29/07/20250129073337-O5WM7174.json"
            title="Chatbot"
          ></iframe>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
        .chatbot-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .chatbot-button:hover {
          background-color: #0056b3;
        }
        .chatbot-iframe {
          width: 350px;
          height: 500px;
          border: none;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
}

export default App;
