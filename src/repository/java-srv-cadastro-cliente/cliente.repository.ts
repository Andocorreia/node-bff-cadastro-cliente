import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClienteModel } from 'src/model/cliente.model';
import { ClienteRepositoryResponse } from './response/cliente.repository.response';
import { ClienteMapper } from 'src/mapper/cliente.mapper';
import { ClienteRepositoryRequest } from './request/cliente.repository.request';

@Injectable()
export class ClienteRepository {
    constructor(private httpService: HttpService) {
    }
    async getClientes() : Promise<Array<ClienteModel>> {
        const url = `${process.env.JAVA_SRV_CADASTRO_CLIENTE}/api/v1/clientes`;

        try {
            const response = await firstValueFrom(this.httpService.get<ClienteRepositoryResponse[]>(url));
            return ClienteMapper.mapRepositoryResponseToClienteModelList(response.data);
        } catch (error) {
            console.error('Erro ao obter clientes:', error);
            throw new Error('Não foi possível obter os clientes.');
        }
    }

    async getClienteById(id: number) : Promise<ClienteModel> {
        const url = `${process.env.JAVA_SRV_CADASTRO_CLIENTE}/api/v1/detalhe-cliente/${id}`;
        try {
            const response = await firstValueFrom(this.httpService.get<ClienteRepositoryResponse>(url));
            return ClienteMapper.mapRepositoriResponseToClienteModel(response.data);
        } catch (error) {
            console.error('Erro ao obter cliente por id:', error);
            throw new Error('Não foi possível obter o cliente.');
        }
    }

    deleteClienteById(id: number) : void {
        const url = `${process.env.JAVA_SRV_CADASTRO_CLIENTE}/api/v1/deletar-cliente/${id}`;
        try {
            firstValueFrom(this.httpService.delete(url));
        } catch (error) {
            console.error('Erro ao deletar cliente por id:', error);
            throw new Error('Não foi possível deletar o cliente.');
        }
    }

    async updateCliente(cliente: ClienteModel) : Promise<ClienteModel> {
        const url = `${process.env.JAVA_SRV_CADASTRO_CLIENTE}/api/v1/atualizar-cliente`;
        
        try {
            const request : ClienteRepositoryRequest = ClienteMapper.mapModelToClienteRepositoryrequest(cliente);
            const response = await firstValueFrom(this.httpService.put<ClienteRepositoryResponse>(url, request));
            return ClienteMapper.mapRepositoriResponseToClienteModel(response.data);
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            throw new Error('Não foi possível atualizar o cliente.');
        }
    }

    createCliente(cliente: ClienteModel) : void {
        const url = `${process.env.JAVA_SRV_CADASTRO_CLIENTE}/api/v1/cadastrar-cliente`;
        try {
            const request : ClienteRepositoryRequest = ClienteMapper.mapModelToClienteRepositoryrequest(cliente);
            firstValueFrom(this.httpService.post(url, request));
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            throw new Error('Não foi possível criar o cliente.');
        }
    }
}