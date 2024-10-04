import { auto } from "./auto";
import { moto } from "./moto";
import { camion } from "./camion";

export class RegistroAutomotor {
    private vehiculos: (auto | moto | camion)[] = [];

    agregarVehiculo(vehiculo: auto | moto | camion): void {
        this.vehiculos.push(vehiculo);
    }

    obtenerVehiculos(): (auto | moto | camion)[] {
        return this.vehiculos;
    }

    modificarVehiculo(i: number, modelo: string, rodado: number, color: string): void {
        if (i >= 0 && i < this.vehiculos.length) {
            const vehiculo = this.vehiculos[i];
            vehiculo.setColor(color);
            vehiculo.setRodado(rodado);
        } else {
            console.log("Vehículo no encontrado");
        }
    }

    darDeBaja(modelo: string): void { 
        this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.getModelo() !== modelo);
    }
}

// Crea vehículos
const auto1 = new auto("Fiat", "Argo",4,"rojo");
const moto1 = new moto("Gillera", "Smash","negra",2);
const camion1 = new camion("Mercedes", "Accelo","blanco",8);
   
   

const registro= new RegistroAutomotor();

// Agregar vehículos al registro
registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

// Modifica el vehiuclo
registro.modificarVehiculo(0, "Cronos", 4,"verde"); // Modifica auto1

// Dar de baja vehiculo
registro.darDeBaja("smash"); // Dar de baja la moto1

//  Muestra vehículos
console.log(registro.obtenerVehiculos());
