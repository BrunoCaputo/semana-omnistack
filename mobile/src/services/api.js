import axios from "axios";

// Usar a URL base do Servidor utilizado
// Recomendado usar o ngrok caso não esteja na mesma rede
const api = axios.create({
    baseURL: ''
})

export default api;