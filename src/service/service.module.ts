import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repository/repository.module';
import { ClientesService } from 'src/service/clientes.service';

@Module({
  imports: [RepositoryModule],
  controllers: [],
  providers: [ClientesService],
  exports: [ClientesService],
})
export class ServiceModule {}
