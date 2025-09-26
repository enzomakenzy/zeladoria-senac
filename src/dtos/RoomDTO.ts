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
