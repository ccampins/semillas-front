export default interface SemillasModel{
    
        id?: number,
        nombre: string,
        codigo?: string,
        descripcion: string,
        especie: string,
        origen: string,
        proveedor?: string,
        bancoDeSemillas?: string,
        limiteMinimoThc?: number,
        limiteMaximoThc?: number,
        limiteMinimoCbd?: number,
        limiteMaximoCbd?: number
    
}