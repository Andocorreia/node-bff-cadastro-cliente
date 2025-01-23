import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientesService } from 'src/service/clientes.service';
import { ClienteResponse } from './response/cliente.response';
import { ClienteMapper } from 'src/mapper/cliente.mapper';
import { ClienteRequest } from './request/cliente.request';

@Controller()
export class ClientesController {
    
    constructor(private clienteService: ClientesService) {}

    @Get('/clientes')
    async getClientes() : Promise<ClienteResponse[]>{
        return (await this.clienteService.getClientes()).map(cliente => (ClienteMapper.mapModelToClienteResponse(cliente)));
    }

    @Get('/detalhe-cliente/:id')
    async getClienteById(@Param('id') id: number) : Promise<ClienteResponse>{
        return ClienteMapper.mapModelToClienteResponse(await this.clienteService.getClienteById(id));
    }

    @Delete('/deletar-cliente/:id')
    deleteClienteById(@Param('id') id: number) :void{
        this.clienteService.deleteClienteById(id);        
    }

    @Put('/atualizar-cliente')
    async updateCliente(@Body() clienteRequest: ClienteRequest) : Promise<ClienteResponse> {
        const cliente = ClienteMapper.mapRequestToClienteModel(clienteRequest);
        const updatedCliente  = await this.clienteService.updateCliente(cliente)
        return ClienteMapper.mapModelToClienteResponse(updatedCliente);        
    }

    @Post('/cadastrar-cliente')
    createCliente(@Body() clienteRequest: ClienteRequest) : void {
        const cliente = ClienteMapper.mapRequestToClienteModel(clienteRequest);
       this.clienteService.createCliente(cliente)
        
    }

}