import { Controller, Get } from '@nestjs/common';
import { ConsultaClientesService } from 'src/service/consulta.clientes.service';
import { ClienteResponse } from './response/consulta.cliente.response';
import { ClienteMapper } from 'src/mapper/cliente.mapper';

@Controller('/clientes')
export class ClientesContoller {
    
    constructor(private consultaClientes: ConsultaClientesService) {}

    @Get()
    async getClientes() : Promise<ClienteResponse[]>{
        return (await this.consultaClientes.getClientes()).map(cliente => (ClienteMapper.mapToClienteResponse(cliente)));
    }

}