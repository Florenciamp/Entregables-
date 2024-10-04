import { vehiculos } from "./vehiculos";

const puerta = 5;

export class auto extends vehiculos{

    private puerta:number;
        
    constructor (marca: string, modelo: string,rodado: number,color: string){
        super(marca, modelo, rodado,color);
        this.puerta = puerta 
    
    }


}