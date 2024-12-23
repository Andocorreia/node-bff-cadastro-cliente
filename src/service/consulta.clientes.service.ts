import { Injectable } from '@nestjs/common';
import { ClienteModel } from 'src/model/cliente.model';
import { ConsultaClienteRepository } from 'src/repository/java-srv-cadastro-cliente/consulta.cliente.repository';

@Injectable()
export class ConsultaClientesService {

    constructor(private consultaClienteRepository: ConsultaClienteRepository) {}
    
    getClientes(): Promise<Array<ClienteModel>> {
        return this.consultaClienteRepository.getClientes();
    }   

}