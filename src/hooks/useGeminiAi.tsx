import { GoogleGenerativeAI, ModelParams } from "@google/generative-ai";

enum GeminiModels {
  GEMINI = "gemini-1.0-pro",
  GEMINI_PRO = "gemini-1.5-pro",
  GEMINI_PRO_FLASH = "gemini-1.5-flash"
  
}

export default function useGeminiAi(model: GeminiModels) {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_AI_API);
  const config:ModelParams  = {
    model: model,
    generationConfig: {
      maxOutputTokens: 2000,
      temperature: 0.7,
      responseMimeType: "application/json",
    }
  };
  //  const prompt = "Write a short paragraph on chatGPT"
  // const image = {
  //   data: 
  // }

  genAI.getGenerativeModel(config)


}
