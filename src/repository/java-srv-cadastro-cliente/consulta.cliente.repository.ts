import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClienteModel } from 'src/model/cliente.model';
import { ClienteRepositoryResponse } from './response/consulta.cliente.repository.response';
import { ClienteMapper } from 'src/mapper/cliente.mapper';

@Injectable()
export class ConsultaClienteRepository {
    constructor(private httpService: HttpService) {
    }
    async getClientes() : Promise<Array<ClienteModel>> {
        const url = `${process.env.JAVA_SRV_CADASTRO_CLIENTE}/api/v1/clientes`;

        try {
            const response = await firstValueFrom(this.httpService.get<ClienteRepositoryResponse[]>(url));
            return ClienteMapper.mapToClienteModel(response.data);
        } catch (error) {
            console.error('Erro ao obter clientes:', error);
            throw new Error('Não foi possível obter os clientes.');
        }
    }
}