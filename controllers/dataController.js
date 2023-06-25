import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';
dotenv.config();

const config = new Configuration({
  apiKey:process.env.API_KEY ,
});

const openai = new OpenAIApi(config);

export const inputData = async (req, res) => {
  try {
    const {data} = req.body;

    if (!data) {
      return res.status(400).json({ error: 'No queries' });
    }
    console.log(data);

    const gptResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: data,
    });

    const answer = gptResponse.data.choices[0].text.trim();
    console.log(answer);
    return res.status(200).send({ success: true, message: answer });
  } catch (err) {
    res.status(500).send({ success: false, message: err.message });
  }
}
