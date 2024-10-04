export class auto {
    private marca: string;
    private modelo: string;
    private color: string;
    private rodado:  number;

    constructor(marca: string, modelo: string, rodado: number,color: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.rodado = rodado;
    }

     getMarca(): string {
        return this.marca;
    }

     getModelo(): string {
        return this.modelo;
    }

     getColor(): string {
        return this.color;
    }

    getRodado(): number {
        return this.rodado;
    }

    setColor(color: string): void {
        this.color = color;
 
    }
    
    setRodado(rodado:number): void{
        this.rodado=rodado;
    }

}

