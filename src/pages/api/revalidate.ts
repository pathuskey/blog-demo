export default async function handler(req, res) {
  const url = req.body.url;

  try {
    // Revalidate the URLs for those documents
    await res.revalidate(url);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue to show
    // the last successfully generated page
    return res.status(500).send('Error revalidating');
  }
}
