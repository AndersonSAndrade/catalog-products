/**
 * Metodo de gerar automaticamente numeros recebendo uma quantidade máxima
 * @param amount 
 */
export const generatedList = (amount: number) => {
    return Array.from(Array(amount).keys());
}