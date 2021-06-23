import { NestMiddleware, Injectable, Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    response.on('finish', () => {
      const { statusCode } = response;
      const contentLegth = response.get('content-length');
      this.logger.log(
        `${method} ${statusCode} ${contentLegth} ${originalUrl} ${ip}`,
      );
    });
    next();
  }
}
