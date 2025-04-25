
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import path from 'path';
import { fileURLToPath } from 'url';
// Import the routes file using dynamic import
const apiRoutesPromise = import('./routes.ts');
let apiRoutes;

// Load environment variables
dotenv.config();

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('dev'));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ status: 'ok' });
});

// Initialize the server after loading routes
async function initServer() {
  try {
    // Resolve the routes import
    const routesModule = await apiRoutesPromise;
    apiRoutes = routesModule.default; // Get the default export
    
    // API routes
    app.use(apiRoutes);
    
    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to initialize server:', error);
  }
}

// Start the initialization process
initServer();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '../dist')));

// Route all requests to the frontend app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Error handling
app.use(errorHandler);

export default app;
