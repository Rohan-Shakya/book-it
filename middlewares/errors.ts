import ErrorHandler from "../utils/errorHandler";

const onError = (err: any, req: any, res: any, next: any) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  return res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};

export default onError;
