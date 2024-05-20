import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';

export async function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const jwtService: JwtService = new JwtService();

  const decodedToken = await jwtService.decode(
    req.headers.bearer_token as string,
  );

  // if user changed password
  // if token iat is more than user password updated_at

  if (!decodedToken) {
    throw new UnauthorizedException('Invalid token');
  }

  next();
}
