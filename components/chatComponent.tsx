"use client";
import { useChat, Message } from "ai/react";
import Image from "next/image";
import sendBtn from "../public/send.svg";
import userIcon from "../public/user-icon.png";
import gptImgLogo from "../public/chatgptLogo.svg";


export default function ChatComponent() {
  // Vercel AI SDK (ai package) useChat()
  // useChat -> handles messages for us, user input, handling user submits, etc.
  const { input, handleInputChange, handleSubmit, messages } = useChat();
  // messages -> [user asks a question, gpt-4 response, user asks again, gpt-4 responds]

  console.log(messages);
  console.log(input);

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight border-b-4 border-slate-500 text-slate-900 sm:text-3xl">
        Your Own Assistant GV AI
      </h2>
      <div className="chats">
        {messages.length === 0 ? (
          <h2 className="text-xl mt-32 font-bold tracking-tight text-slate-900 sm:text-2xl">
            Ask your doubts below!
          </h2>
        ) : (
          messages.map((message: Message) => {
            return (
              <div key={message.id}>
                {message.role === "assistant" ? (
                  <div className="chat bot">
                    {" "}
                    <Image className="chatimg" src={gptImgLogo} alt="" />{" "}
                    <h3 className="text-xl font-semibold mt-2">GV AI</h3>
                  </div>
                ) : (
                  <div className="chat bot">
                    {" "}
                    <Image className="chatimg" src={userIcon} alt="" />
                    <h3 className="text-xl font-semibold mt-2">User</h3>
                  </div>
                )}
                {message.content
                  .split("\n")
                  .map((currentTextBlock: string, index: number) => {
                    if (currentTextBlock === "") {
                      return (
                        <p className="txt" key={message.id + index}>
                          &nbsp;
                        </p>
                      );
                    } else {
                      
                      return (
                        <p className="txt ml-2" key={message.id + index}>
                          {currentTextBlock}
                        </p>
                      );
                    }
                  })}
              </div>
            );
          })
        )}
      </div>

      <form className="mt-12" onSubmit={handleSubmit}>
        {/* <p>Your Message</p> */}
        <div className="chatFooter">
          <div className="inp">
            <input
              className="inputPlaceholder"
              placeholder={"What are your doubts?"}
              value={input}
              onChange={handleInputChange}
              type="text"
            />
            <button className="send">
              <Image src={sendBtn} alt="Send" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

{
  /* <div className="chats">
          <div className="chat">
            <Image className="chatimg" src={userIcon} alt="" />
            <p className="txt">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="chat bot">
            <Image className="chatimg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </p>
          </div>
        </div> */
}
