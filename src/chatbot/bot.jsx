import { useState } from "react";
import "./bot.css";
import axios from "axios";

function Bot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take upto 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <>
      <div className="custom-container">
        <form
          onSubmit={generateAnswer}
          className="custom-form custom-input-form"
        >
          <a href="https://github.com/Vishesh-Pandey/chat-ai" target="_blank">
            <h1 className="text-3xl text-center">Itinerary Planner</h1>
          </a>
          <textarea
            required
            className="custom-textarea"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask the bot to plan your itinerary for your next Goa or Thailand trip"
          ></textarea>
          <button
            type="submit"
            className="custom-button custom-generate-button"
            disabled={generatingAnswer}
          >
            Generate answer
          </button>
        </form>
        <div className="custom-result">
          <pre className="p-3">{answer}</pre>
        </div>
      </div>
    </>
  );
}

export default Bot;