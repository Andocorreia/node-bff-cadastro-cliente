type EstadoCivil = 'S' | 'C' | 'D' | 'V' | 'U';

type Sexo = 'M' | 'F';

type ClienteStatus = 'A' | 'I' | 'E';

export interface EnderecoRepositoryResponse {
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;

}

export interface ClienteRepositoryResponse {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  endereco: EnderecoRepositoryResponse;
  telefone: string;
  sexo: Sexo;
  dataNascimento: Date;
  dataCadastro: Date;
  estadoCivil: EstadoCivil;
  status: ClienteStatus;
}