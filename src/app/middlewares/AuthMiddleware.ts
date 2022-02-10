import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface ITokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function AuthMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ msg: "Invalid authorization" });
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const data = jwt.verify(token, "secret");
    const { id } = data as ITokenPayload;

    request.userId = id;

    return next();
  } catch {
    return response.status(401).json({ msg: "Invalid authorization" });
  }
}
