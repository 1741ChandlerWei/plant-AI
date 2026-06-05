export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { username, password } = req.body || {};
  const U = process.env.S_USER || 'pledge77';
  const P = process.env.S_PASS || 'pledge00';
  if (username === U && password === P) {
    return res.status(200).json({ ok: true });
  }
  return res.status(401).json({ error: '帳號或密碼錯誤' });
}
