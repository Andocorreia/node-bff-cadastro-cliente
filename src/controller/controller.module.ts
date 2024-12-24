import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { ClientesController } from './clientes.controller';
import { ServiceModule } from 'src/service/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [HealthController, ClientesController],
  providers: [],
  exports: [],
})
export class ControllerModule {}
