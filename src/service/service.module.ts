import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repository/repository.module';
import { ConsultaClientesService } from 'src/service/consulta.clientes.service';

@Module({
  imports: [RepositoryModule],
  controllers: [],
  providers: [ConsultaClientesService],
  exports: [ConsultaClientesService],
})
export class ServiceModule {}
