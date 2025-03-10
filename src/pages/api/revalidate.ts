import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const secret = req.query.secret;
    if (secret !== process.env.REVALIDATE_SECRET) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await res.revalidate('/');

    return res.json({ revalidate: true });
  } catch (err) {
    console.error('Revalidation Error:', err);
    return res.status(500).send('Revalidation Failed');
  }
}
