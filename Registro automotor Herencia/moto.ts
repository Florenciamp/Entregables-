import { vehiculos } from "./vehiculos";

const rueda = 2;

export class moto extends vehiculos{

    private rueda:number;
        
    constructor(marca: string, modelo: string,color:string,rodado:number){
        super(marca, modelo, rodado,color);
        this.rueda = rueda 
    
    }


}