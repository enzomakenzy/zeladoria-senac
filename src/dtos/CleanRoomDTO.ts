export interface CleanRoomDTO {
  id: number;
  sala: number;
  sala_nome: string;
  data_hora_limpeza: string;
  funcionario_responsavel: {
    id: number;
    username: string;
  }
  observacoes: string;
}