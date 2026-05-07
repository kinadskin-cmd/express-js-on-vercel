export default function handler(req, res) {
  if (req.method === 'POST') {
    const { videoUrl, caption } = req.body;

    if (!videoUrl) {
      return res.status(400).json({ error: 'Missing videoUrl' });
    }

    const postId = 'TT_' + Math.random().toString(36).substring(7);

    return res.status(200).json({
      success: true,
      platform: 'TikTok',
      videoUrl,
      caption,
      postId
    });
  }

  return res.status(200).json({
    message: 'TikTok API endpoint ready'
  });
}
``
