
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Don't leak error details in production
  const error = process.env.NODE_ENV === 'production' 
    ? 'Internal Server Error' 
    : err.message;

  res.status(err.status || 500).json({
    success: false,
    error
  });
};
