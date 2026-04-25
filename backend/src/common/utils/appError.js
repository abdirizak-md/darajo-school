class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);

    // HTTP status code (400, 404, 409, etc.)
    this.statusCode = statusCode;

    // mark as operational error (expected error)
    this.isOperational = true;

    // ensure correct stack trace (for debugging)
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;