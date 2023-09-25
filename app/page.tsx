import msgIcon from "../public/message.svg";
import home from "../public/home.svg";
import saved from "../public/bookmark.svg";
import Image from "next/image";
import ChatComponent from "@/components/chatComponent";
import logo from "../public/logo.png";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop flex flex-col">
            <Image src={logo} alt="Logo" className="logo" />
          </div>
          <button className="midBtn font-bold">
            GV AI
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <Image src={msgIcon} alt="query" />
              Where is SGVU?
            </button>
            <button className="query">
              <Image src={msgIcon} alt="query" />
              Should I pursue Phd?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <Image src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <Image src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
        </div>
      </div>

      <div className="main">
        <ChatComponent />
      </div>
    </div>
  );
}

export default App;
