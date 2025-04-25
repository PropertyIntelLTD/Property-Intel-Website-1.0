import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Load environment variables
dotenv.config();

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
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
  
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  
  // Use Vite's middleware
  app.use(vite.middlewares);
  
  // Test route
  app.get('/api/test', (req, res) => {
    res.json({ status: 'ok' });
  });
  
  // Import the routes file using dynamic import
  try {
    const routesModule = await import('./Server/routes.ts');
    const apiRoutes = routesModule.default;
    
    // API routes
    app.use(apiRoutes);
    console.log('API routes loaded successfully');
  } catch (error) {
    console.error('Failed to load API routes:', error);
  }
  
  // Fallback for all other routes - serve index.html
  app.use('*', async (req, res) => {
    // Serve the index.html from the root
    const indexPath = path.resolve(__dirname, 'index.html');
    
    if (fs.existsSync(indexPath)) {
      let html = fs.readFileSync(indexPath, 'utf-8');
      html = await vite.transformIndexHtml(req.originalUrl, html);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } else {
      res.status(404).send('Not found');
    }
  });
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});