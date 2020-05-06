import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus, Logger} from '@nestjs/common';
import {UNKNOWN_ERROR} from './keys';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  public catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const code = status !== HttpStatus.INTERNAL_SERVER_ERROR
      ? exception.message.message || exception.message || null
      : UNKNOWN_ERROR;

    const errorResponse = {
      error: {
        status,
        timestamp: new Date().toLocaleString(),
        path: request.url,
        method: request.method,
        code,
        message: exception.error,
      },
    };
    if (process.env.NODE_ENV !== 'test' && status !== 404) {
      Logger.error(exception.message || null, JSON.stringify(exception.error) || exception, 'Exceptions Filter');
    }

    response.status(status).json(errorResponse);
  }
}
