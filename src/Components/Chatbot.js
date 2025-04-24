import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    if (!document.getElementById("chatling-embed-script")) {
      const configScript = document.createElement("script");
      configScript.innerHTML = `window.chtlConfig = { chatbotId: "9147986832" }`;
      document.head.appendChild(configScript);

      const chatScript = document.createElement("script");
      chatScript.async = true;
      chatScript.setAttribute("data-id", "9147986832");
      chatScript.id = "chatling-embed-script";
      chatScript.src = "https://chatling.ai/js/embed.js";
      document.body.appendChild(chatScript);
    }
  }, []);

  return null;
};

export default Chatbot;
