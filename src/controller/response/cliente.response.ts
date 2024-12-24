type EstadoCivil = 'S' | 'C' | 'D' | 'V' | 'U';

type Sexo = 'M' | 'F';

type ClienteStatus = 'A' | 'I' | 'E';

export interface ClienteEnderecoResponse {
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;

}

export interface ClienteResponse {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  endereco: ClienteEnderecoResponse;
  telefone: string;
  sexo: Sexo;
  dataNascimento: Date;
  dataCadastro: Date;
  estadoCivil: EstadoCivil;
  status: ClienteStatus;
}