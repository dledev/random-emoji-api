import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    // check if API key is present
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const apiKey = request.headers['x-api-key'];

    if (apiKey !== 'SECRET') {
      return false;
    }
    return true;
  }
}
