import ErrorHandler from "../utils/errorHandler";

const onError = (err: any, req: any, res: any, next: any) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  // Wrong Mongoose Object Id Error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  // Handling mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map(
      (value: any) => value.message
    );
    error = new ErrorHandler(message, 400);
  }

  return res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};

export default onError;
