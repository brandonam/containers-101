import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { ItemsModule } from './items/items.module';
import { EmployeesModule } from './employees/employees.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [OrdersModule, ItemsModule, EmployeesModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
