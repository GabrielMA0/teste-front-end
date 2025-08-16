import axios from "axios";

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get("/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json")
        
        return response.data.products
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return [];
      }
}