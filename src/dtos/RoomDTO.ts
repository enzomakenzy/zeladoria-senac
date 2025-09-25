export interface RoomDTO {
  id: number;
  qr_code_id: string;
  nome_numero: string;
  imagem: string;
  capacidade: number;
  localizacao: string;
  validade_limpeza_horas: string;
  descricao: string;
  instrucoes: string;
  ativa: boolean;
  responsaveis: string[];
  status_limpeza: "Limpa" | "Em Limpeza" | "Limpeza Pendente" | "Suja";
  ultima_limpeza_data_hora: string,
  ultima_limpeza_funcionario: string
}

[
  {
      "id": 1,
      "qr_code_id": "uuid-da-sala-1",
      "nome_numero": "Laboratório de Redes",
      "imagem": "http://127.0.0.1:8000/media/sala_pics/uuid_aleatorio.jpg",
      "capacidade": 25,
      "validade_limpeza_horas": 8,
      "descricao": null,
      "instrucoes": null,
      "localizacao": "Bloco C, Sala 203",
      "ativa": true,
      "responsaveis": ["zelador1"],
      "status_limpeza": "Limpeza Pendente",
      "ultima_limpeza_data_hora": null,
      "ultima_limpeza_funcionario": null
  }
]