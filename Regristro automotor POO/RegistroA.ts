import { auto } from "./Auto";
import { moto } from "./Moto";
import { camion } from "./Camion";

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

