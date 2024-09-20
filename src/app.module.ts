import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaserModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { OrderModule } from './modules/orders/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaserModule,
    UsersModule,
    AuthModule,
    OrderModule,
  ]
})
export class AppModule { }