export interface RoomDTO {
  id: number;
  nome_numero: string;
  capacidade: number;
  localizacao: string;
  status_limpeza: "Limpa" | "Limpeza Pendente";
  descricao: string;
  ultima_limpeza_data_hora: string,
  ultima_limpeza_funcionario: string
}