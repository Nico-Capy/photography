import express, { Request, Response } from 'express';
import multer from 'multer';
import { Storage } from '@google-cloud/storage';
import { MongoClient, MongoError } from 'mongodb';
import passport from 'passport';

const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(passport.initialize());

const galleries = ['drone', 'infrared', 'pinhole', 'studio', 'analog', 'animals', 'street'];

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID || '',
  credentials: {
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL || '',
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY || '',
  },
});

const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME || '');

const mongoClient = new MongoClient(process.env.MONGODB_URI || '');

const uploadFileToS3 = async (file) => {
  const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME;

  if (!bucketName) {
    throw new Error('GOOGLE_CLOUD_BUCKET_NAME not configured');
  }

  const blob = bucket.file(file.originalname);
  const blobStream = blob.createWriteStream({
    resumable: false,
  });

  blobStream.on('error', (err) => {
    throw new Error(`Error uploading file to Google Cloud Storage: ${err}`);
  });

  return new Promise((resolve, reject) => {
    blobStream.on('finish', () => {
      const publicUrl = `https://storage.googleapis.com/${bucketName}/${blob.name}`;
      resolve(publicUrl);
    });

    blobStream.end(file.buffer);
  });
};

galleries.forEach((gallery) => {
  app.post(`/api/photos/${gallery}`, upload.single('photo'), async (req, res) => {
    const imageUrl = await uploadFileToS3(req.file);

    // Save the imageUrl and any additional metadata in MongoDB
    res.send(`Photo uploaded successfully to the ${gallery} gallery.`);
  });

  app.put(`/api/photos/${gallery}/:id`, async (req: Request<{ id: string }>, res: Response) => {
    // Update the photo metadata in MongoDB using req.body and req.params.id
    res.send(`Metadata updated for photo with ID ${req.params.id} in the ${gallery} gallery.`);
  });
});

app.post('/login', async (req, res) => {
  // Validate the user's credentials and respond with a JWT
});

const uri = 'mongodb://localhost:27017'; // MongoDB connection URI
const client = new MongoClient(uri);

client.connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err: MongoError) => {
    console.error('Error connecting to MongoDB:', err);
  });
