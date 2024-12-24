import { Module } from '@nestjs/common';
import { ClienteRepository } from './java-srv-cadastro-cliente/cliente.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [ClienteRepository],
    exports: [ClienteRepository],
})
export class RepositoryModule {}