import { Module } from '@nestjs/common';
import { ConsultaClienteRepository } from './java-srv-cadastro-cliente/consulta.cliente.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [ConsultaClienteRepository],
    exports: [ConsultaClienteRepository],
})
export class RepositoryModule {}