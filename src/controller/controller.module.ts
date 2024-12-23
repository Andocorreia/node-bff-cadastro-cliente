import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { ClientesContoller } from './clientes.controller';
import { ServiceModule } from 'src/service/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [HealthController, ClientesContoller],
  providers: [],
  exports: [],
})
export class ControllerModule {}
