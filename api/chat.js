export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  // 修正 model 名稱
  const body = {
    ...req.body,
    model: 'claude-sonnet-4-5'
  };

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();
  res.status(response.status).json(data);
}
