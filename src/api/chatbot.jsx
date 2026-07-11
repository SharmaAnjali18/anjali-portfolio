import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

console.log("API_URL:", API_URL);

export const sendMessageToAI = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/api/chat/`, {
      message,
    });

    console.log("Response:", response);

    return response.data.reply;
  } catch (error) {
    console.log("Full Error:", error);
    console.log("Response:", error.response);
    console.log("Data:", error.response?.data);
    console.log("Status:", error.response?.status);

    return "Sorry! Something went wrong.";
  }
};