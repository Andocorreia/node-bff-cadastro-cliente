import { ClienteResponse } from 'src/controller/response/consulta.cliente.response';
import { ClienteModel } from 'src/model/cliente.model';
import { ClienteRepositoryResponse } from 'src/repository/java-srv-cadastro-cliente/response/consulta.cliente.repository.response';

export class ClienteMapper {
    constructor() {
    }
    
    public static mapToClienteResponse(cliente :ClienteModel): ClienteResponse {
        return {
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            endereco: cliente.endereco,
            telefone: cliente.telefone,
            sexo: cliente.sexo,
            dataNascimento: cliente.dataNascimento,
            dataCadastro: cliente.dataCadastro,
            estadoCivil: cliente.estadoCivil,
            status: cliente.status
        };
    } 
    
    public static mapToClienteModel(clientes: ClienteRepositoryResponse[]): Array<ClienteModel> {
        return clientes.map(cliente => ({
            id: cliente.id,
            nome: cliente.nome,
            email: cliente.email,
            cpf: cliente.cpf,
            endereco: cliente.endereco,
            telefone: cliente.telefone,
            sexo: cliente.sexo,
            dataNascimento: cliente.dataNascimento,
            dataCadastro: cliente.dataCadastro,
            estadoCivil: cliente.estadoCivil,
            status: cliente.status
        }));
    }
}
