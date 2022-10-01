import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt"
import { PassportModule } from "@nestjs/passport"
import { localStrategy } from "./local.strategy";
import { Module } from "@nestjs/common";
import { jwtStrategy } from "./jwt.strategy";

@Module({
	imports: [PassportModule, JwtModule.register({
		secret:"test",
		signOptions:{expiresIn: '60s'}
	})],
	providers: [AuthService, localStrategy,jwtStrategy],
	exports:[AuthService]
})
export class AuthModule {

}