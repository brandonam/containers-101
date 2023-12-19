import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ItemsModule } from './items/items.module';
import { EmployeesModule } from './employees/employees.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'online_purchase_system',
      entities: [],
      synchronize: true,
    }),
    OrdersModule,
    ItemsModule,
    EmployeesModule,
    CustomersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
