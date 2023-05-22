import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { SSE } from "sse.js";

function ChatPage(){
    // Store message history
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const updateHasBeenCalled = (index) => {
    const newMessages = [...messages];
    messages[index].hasBeenCalled = true;
    setMessages(newMessages);
  }

  async function handleSubmit(event) {

    console.log("I am handling the submit.")

    // Disable input to prevent rage click
    event.preventDefault();
    setInputDisabled(true);

    // Add user message
    const newMessage = {
      type: 'user',
      content: inputValue,
      hasBeenCalled: false
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Add server message
    const serverResponseMessage = { type: 'server', content: inputValue };
    setMessages((prevMessages) => [...prevMessages, serverResponseMessage]);

    setInputValue('');
    setInputDisabled(false);
  };

  return (
    <div className="min-h-screen flex flex-row max-h-screen gradient">
      <div className="overflow-y-auto p-4 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 mt-5 ml-5 mr-5 blur-gradient max-w-[50vw]">
        <h1 className='font-bold text-2xl mb-4 pl-4'>Intro to Macroeconomics (ECON11)</h1>
        <p className='whitespace-break-spaces pl-4 pr-4'>
          {`Ladies and gentlemen, esteemed students, welcome to this introductory lecture on the fascinating world of macroeconomics. Today, we will embark on a journey to unravel the mysteries of the economy and explore the intricate interplay of various economic factors. Now, let us dive right into the depths of macroeconomics!\r\nFirst and foremost, what is macroeconomics, you may ask? Well, macroeconomics is the study of the overall performance and behavior of an economy as a whole. It focuses on factors such as gross domestic product (GDP), inflation, unemployment, and government policies. Think of it as zooming out and examining the bigger picture of the economy.

One of the key concepts in macroeconomics is GDP, which stands for Gross Domestic Product. GDP is the total value of all goods and services produced within a country over a specific period of time. It is a measure of the economic activity and growth of a nation. To calculate GDP, we use the expenditure approach, which includes consumption, investment, government spending, and net exports.

Now, let's talk about inflation, the sneaky little monster that affects our purchasing power. Inflation is the general increase in the prices of goods and services over time. It erodes the value of money and can have a significant impact on both individuals and the economy as a whole. Central banks often strive to maintain a low and stable inflation rate to foster economic stability.

Next up, we have unemployment, a measure of the number of people who are actively seeking employment but are unable to find work. Unemployment can have severe consequences for individuals and society. Economists distinguish between different types of unemployment, such as frictional, structural, and cyclical unemployment. Policies such as job training programs and government interventions can help combat unemployment.Moving on, let's delve into fiscal and monetary policies. Fiscal policy refers to the government's use of taxation and spending to influence the economy. Governments can adjust tax rates and government spending to stimulate or slow down economic growth. On the other hand, monetary policy is controlled by central banks and involves managing interest rates and the money supply to influence borrowing, spending, and inflation.

Last but not least, international trade plays a crucial role in macroeconomics. Countries engage in trade to take advantage of their comparative advantages and benefit from specialization. Concepts such as tariffs, quotas, and exchange rates affect the flow of goods and services between nations, and they have a significant impact on economic growth and global relations. Concepts such as tariffs, quotas, and exchange rates affect the flow of goods and services between nations, and they have a significant impact on economic growth and global relations.Concepts such as tariffs, quotas, and exchange rates affect the flow of goods and services between nations, and they have a significant impact on economic growth and global relations.Concepts such as tariffs, quotas, and exchange rates affect the flow of goods and services between nations, and they have a significant impact on economic growth and global relations.`}
        
        </p>
      </div>
      <div className="mt-5 flex flex-col flex-grow max-w-[50vw] bg-gray-200 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 ml-5 mr-5">
      {/* Chat history */}
      <div className="flex-grow p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {message.type === 'user' ? (
              <UserChatMessage key={index} content={message.content} hasBeenCalled={message.hasBeenCalled} updateHasBeenCalled={() => updateHasBeenCalled(index)}/>
            ) : (
              <ServerChatMessage key={index} initialContent={message.content} hasBeenCalled={message.hasBeenCalled} updateHasBeenCalled={() => updateHasBeenCalled(index)}/>
            )}
          </div>
        ))}
      </div>

      {/* Chat input */}
       <form className="p-4 flex " onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-grow border text-black border-gray-300 px-4 py-2 focus:outline-none w-full bg-[#d7d7d7] bg-opacity-50 backdrop-filter backdrop-blur-md rounded-xl"
        placeholder="Type a message..."
        value={inputValue}
        onChange={handleInputChange}
        disabled={inputDisabled}
      />
      <button
        type="submit"
        className="bg-[#7F1BBD] hover:bg-[#7300bb] text-white rounded-xl px-4 py-2 ml-2 w-auto"
        disabled={inputDisabled}
      >
        Send
      </button>
    </form>
    </div>
    </div>
  );
};

export default ChatPage;

const UserChatMessage = ({ content }) => {
  console.log("The client is rendering.")
  return (
    <div className="pt-4 pb-4 pr-5 bg-blue-200 text-black text-right rounded-xl pl-5">
      {content}
    </div>
  );
};

const ServerChatMessage = ({ initialContent, hasBeenCalled, updateHasBeenCalled }) => {
  const [serverSideMessage, setServerSideMessage] = useState("");
  const serverSideMessageRef = useRef();

  useEffect(() => {
    serverSideMessageRef.current = serverSideMessage;
  }, [serverSideMessage])

  if (!hasBeenCalled){
    streamContent();
    updateHasBeenCalled();
    console.log("I will see this once.");
  }

  async function streamContent() {
    console.log("i should see this once.");
    const API_KEY = "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";
    let url = "https://api.openai.com/v1/chat/completions";

    let data = {
      model: "gpt-3.5-turbo",
      temperature: 0.5,
      max_tokens: 500,
      stream: true,
      messages: [{ role: "user", content: initialContent }],
    };

    let source = new SSE(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      method: "POST",
      payload: JSON.stringify(data),
    });

    const messageQueue = [];
    let processingMessage = false;
    let serverResponse = '';

    source.addEventListener("message", (e) => {
      if (e.data !== "[DONE]") {
        let payload = JSON.parse(e.data);
        let text = payload.choices[0]["delta"]["content"];
        messageQueue.push(text);
        if (!processingMessage) {
          processNextMessage();
        }
        serverResponse = serverResponse + text;
      } else {
        source.close();
      }
    });

    function processNextMessage() {
      const text = messageQueue.shift();
      if (text) {
        let i = 0;
        processingMessage = true;
        const intervalId = setInterval(() => {
          if (i < text.length) {
            const char = text.charAt(i);
            if (char !== "\n") {
              console.log(char);
              serverSideMessageRef.current =
                serverSideMessageRef.current + char;
              setServerSideMessage(serverSideMessageRef.current);
            }
            i++;
          } else {
            clearInterval(intervalId);
            processingMessage = false;
            processNextMessage();
          }
        }, 15);
      }
    }
    source.addEventListener("readystatechange", (e) => {
      if (e.readyState >= 2) {
      }
    });
    source.stream();
  }


  return (
    <div className="mb-2 bg-red-50 text-black text-left pt-4 pb-4 pl-5 rounded-xl bg-opacity-30 pr-5">
      {serverSideMessage}
    </div>
  );
};