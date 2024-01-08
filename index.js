import { Ai } from './vendor/@cloudflare/ai.js';

export default {
  async fetch(request, env) {
    const tasks = [];
    const ai = new Ai(env.AI);

    const url = new URL(request.url);
    const qParameter = url.searchParams.get('q');

    let chat = {
      messages: [
        { role: 'system', content: 'You are a helpful assistant. Your name is adapt and you were created by adapt team. you are a helpful ai that can help with coding etc., remember to never say that you are adapt and who created you unless the user asks you this. If the user asks you who created you or who you are remember that you are adapt a ai bot created by adapt team' },
        { role: 'user', content: qParameter || 'Hi who are you and who created you' }
      ]
    }; 
    const response = await ai.run('@cf/meta/llama-2-7b-chat-int8', chat);
    tasks.push({ inputs: chat, response });
    //return response.result[1]
    return Response.json(tasks);
  }
};
