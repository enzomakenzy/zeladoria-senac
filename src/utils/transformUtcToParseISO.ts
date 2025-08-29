import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function transformUtcToParseISO(utcDateTime: string): string {
  if (!utcDateTime) {
    return "N/A"
  }

  try {
    const parseISODateTime = parseISO(utcDateTime);

    return format(parseISODateTime, "dd/MM/yyyy 'às' HH:mm:ss", { locale: ptBR });
  } catch (error) {
    return "Data inválida";
  }
} 