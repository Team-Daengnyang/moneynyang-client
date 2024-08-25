import { useState, useEffect, useRef } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import send from "../../assets/icons/send.png";
import chatIcon from "../../assets/icons/chaticon.png";
import { TopBar } from "../../components/Topbar";

// import { getReply } from "../services/chatbotAPI";
// import { useRecoilValue } from "recoil";
// import { userIdState } from "../atoms";
// import { fetchAndPlaySpeech } from "../services/chatbotAPI";

const ChatBot = () => {
  const [messages, setMessages] = useState<{ text: string; user: boolean }[]>(
    []
  );

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const chatBoxRef = useRef<HTMLDivElement>(null); // HTMLDivElement 타입으로 명시적으로 지정

  useEffect(() => {
    setMessages([{ text: "AI 챗봇과 대화를 시작해 보세요", user: false }]);
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // const handleSend = async () => {
  //   if (inputValue.trim()) {
  //     const newMessages = [...messages, { text: inputValue, user: true }];
  //     setMessages(newMessages);
  //     setInputValue("");

  //     const reply = await getReply(userId, inputValue);
  //     fetchAndPlaySpeech(reply.chat);
  //     const botMessage =
  //       reply && reply.chat
  //         ? reply.chat
  //         : "챗봇 서비스에 문제가 발생했습니다. 나중에 다시 시도해주세요.";

  //     setMessages((prevMessages) => [
  //       ...prevMessages,
  //       { text: botMessage, user: false },
  //     ]);
  //   }
  // };

  return (
    <div className="h-full pt-6 px-4 flex flex-col justify-between  overflow-hidden relative bg-gray-100">
      {/* <div className="flex items-center bg-gray-100 p-5 pb-0">
        <Link to={"/"} className="h-6 flex items-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-gray-800 pr-4"
            onClick={() => {
              navigate(-1);
            }}
          />
        </Link>
        <span className="text-gray-800 text-lg font-semibold leading-6">
          AI 챗봇
        </span>
      </div> */}
      <TopBar title={"AI 챗봇"} skip={""} />
      <div
        className="flex flex-col justify-start flex-1 overflow-y-auto "
        ref={chatBoxRef}
      >
        <div className="flex flex-col gap-2 ">
          {messages.map((message, index) =>
            message.user ? (
              <div
                key={index}
                className="max-w-[60%] p-3 bg-green-500 text-white rounded-lg self-end text-sm leading-6"
              >
                {message.text}
              </div>
            ) : (
              <div key={index} className="flex items-center">
                <img src={chatIcon} className="w-8 mr-1.5" />
                <div className="max-w-[60%] p-3 bg-white rounded-lg text-sm leading-6">
                  {message.text}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex w-full absolute bottom-0 items-center p-2.5 bg-white border-t border-gray-200  left-0 pl-5 box-border z-10">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="메시지를 입력해주세요."
          className="flex-1 p-2.5 border-none rounded-md mr-2.5 text-sm bg-gray-100"
        />
        <button
          className="w-10 h-10 bg-no-repeat bg-center bg-contain"
          style={{ backgroundImage: `url(${send})` }}
          // onClick={handleSend}
        />
      </div>
    </div>
  );
};

export default ChatBot;
