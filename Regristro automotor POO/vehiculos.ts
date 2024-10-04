import {auto} from "./Auto";
import {moto } from "./Moto";
import { camion} from "./Camion";
import { RegistroAutomotor } from "./RegistroA";

// Crea vehículos
const auto1 = new auto("Fiat", "Argo",4,"rojo");
const moto1 = new moto("Gillera", "Smash",2,"negra");
const camion1 = new camion("Mercedes", "Accelo",8,"blanco");
   

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