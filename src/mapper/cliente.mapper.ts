import { ClienteRequest } from 'src/controller/request/cliente.request';
import { ClienteResponse } from 'src/controller/response/cliente.response';
import { ClienteModel } from 'src/model/cliente.model';
import { ClienteRepositoryRequest } from 'src/repository/java-srv-cadastro-cliente/request/cliente.repository.request';
import { ClienteRepositoryResponse } from 'src/repository/java-srv-cadastro-cliente/response/cliente.repository.response';

export class ClienteMapper {
    constructor() {
    }
    
    public static mapModelToClienteResponse(cliente :ClienteModel): ClienteResponse {
        return cliente;
    } 

    public static mapModelToClienteRepositoryrequest(cliente: ClienteModel): ClienteRepositoryRequest {
        return cliente;
    }
    
    public static mapRepositoryResponseToClienteModelList(clientes: ClienteRepositoryResponse[]): Array<ClienteModel> {
        return clientes.map(cliente => 
            ClienteMapper.mapRepositoriResponseToClienteModel(cliente)
        );
    }

    public static mapRepositoriResponseToClienteModel(cliente: ClienteRepositoryResponse): ClienteModel {
        return cliente;
    }
    
    public static mapRequestToClienteModel(cliente: ClienteRequest): ClienteModel {
        return cliente;
    }


}
