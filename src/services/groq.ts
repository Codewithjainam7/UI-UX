/**
 * Groq API Service
 * Handles live AI reply generation using Groq's high-performance LLMs.
 */

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function generateAIReply(customerEmail: string, customerName: string, subject: string) {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  const model = import.meta.env.VITE_GROQ_MODEL || 'llama-3.3-70b-versatile';

  if (!apiKey) {
    throw new Error('Groq API Key is missing. Please check your .env file.');
  }

  const prompt = `
    You are an elite customer support agent for "Debales AI". 
    Your tone is professional, empathetic, and concise.
    
    Customer Name: ${customerName}
    Customer Email: ${customerEmail}
    Subject: ${subject}
    
    Customer Message:
    "${customerEmail}"
    
    Task: Write a high-quality, helpful reply. 
    - Use the customer's name.
    - Be brief and effective.
    - If it's a technical issue, mention our engineering team is on it.
    - If it's billing, apologize and offer a review.
    
    ONLY return the email body text. No subject lines, no "Dear Name" (unless part of the body), no footers.
  `;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        messages: [
          {
            role: 'system',
            content: 'You are a professional customer support AI.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to generate reply');
    }

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Groq Generation Error:', error);
    throw error;
  }
}
