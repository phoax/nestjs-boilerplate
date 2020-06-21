import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable
} from "@nestjs/common";
import { Observable } from "rxjs";
// import { User } from "../user/entities/user.entity";
// import { RoleName } from "../user/user.types";

/**
* Authorization  Guard
*
*/
@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    console.log("==========================>");
    console.log(request);
    console.log(user);
    // if (user.role === RoleName.Admin) {
    //     return true;
    // }

    throw new HttpException("Unauthorized access", HttpStatus.UNAUTHORIZED);
  }
}
