const catchAsyncErrors =
  (func: any) =>
  (req: any, res: any, next: any): any =>
    Promise.resolve(func(req, res, next)).catch(next);

export default catchAsyncErrors;
