import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BrowserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const userAgent = request.headers['user-agent'];
    const browserClient = userAgent.split(' ')[0] || `Unknown`;
    request.headers.browser = browserClient;
    console.log(`Browser: ${browserClient}`);
    return next.handle();
  }
}
