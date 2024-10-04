import { vehiculos } from "./vehiculos";

const acoplado= 1;

export class camion extends vehiculos{

    private acoplado:number;
        
    constructor(marca: string, modelo: string, color:string, rodado:number){
        super(marca, modelo, rodado,color);
        this.acoplado = acoplado 
    
    }


}