import { Response, Request, NextFunction } from 'express';

export function wrapAsync(middlewareFunc: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    middlewareFunc(req, res, next).catch(next);
  };
}
