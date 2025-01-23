import { Injectable } from '@nestjs/common';
import { ClienteModel } from 'src/model/cliente.model';
import { ClienteRepository } from 'src/repository/java-srv-cadastro-cliente/cliente.repository';

@Injectable()
export class ClientesService {

    constructor(private consultaClienteRepository: ClienteRepository) {}
    
    getClientes(): Promise<Array<ClienteModel>> {
        return this.consultaClienteRepository.getClientes();
    }
    
    getClienteById(id: number): Promise<ClienteModel> {
        return this.consultaClienteRepository.getClienteById(id);
    }

    deleteClienteById(id: number): void {
        this.consultaClienteRepository.deleteClienteById(id);
    }

    updateCliente(cliente: ClienteModel): Promise<ClienteModel> {
        return this.consultaClienteRepository.updateCliente(cliente);
    }

    createCliente(cliente: ClienteModel): void {
        this.consultaClienteRepository.createCliente(cliente);
    }

}