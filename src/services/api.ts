import axios from "axios";

export const api = axios.create({
  baseURL: "https://zeladoria.tsr.net.br/api"
})