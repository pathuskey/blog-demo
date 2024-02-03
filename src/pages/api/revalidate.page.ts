import { NextApiRequest, NextApiResponse } from 'next';
import { revalidatePath } from 'next/cache';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const url = req.body.url;

  try {
    // Revalidate the URLs for those documents
    revalidatePath(url);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue to show
    // the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
};
