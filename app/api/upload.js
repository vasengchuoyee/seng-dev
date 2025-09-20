import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Assuming the video is sent as a base64 string or file buffer
      const { video } = req.body;
      const uploadResponse = await cloudinary.uploader.upload(video, {
        resource_type: 'video',
        folder: 'my_videos', // Optional: Organize videos in a folder
      });
      res.status(200).json({ url: uploadResponse.secure_url, public_id: uploadResponse.public_id });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload video' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

// now in my next.js project i deploy it to hosting but it can't show the videos on my web that i put it on my code folder project so now i want to fix it where i can upload my videos to the could for i can deploy on my web and how to do