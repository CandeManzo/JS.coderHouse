const productos = [
 {nombre: "Molinillo manual", precio: 12150},
 {nombre: "Balanza Hario", precio: 9800},
 {nombre: "Frasco con cierre al vacío", precio: 2380},
 {nombre: "Cafetera Moka Volturno", precio: 13500},
 {nombre: "Chemex 3 tazas", precio: 11900},
 {nombre: "Pitcher Fellow", precio: 5500},
 {nombre: "Pava Gooseneck plateada", precio: 22800},
 {nombre: "Pava Gooseneck negra", precio: 23800},
 {nombre: "Pava Gooseneck blanca", precio: 23800},
 {nombre: "Prensa francesa Holistic", precio: 17600},
 {nombre: "Prensa francesa Bodum 3 pocillos", precio: 15300},
 {nombre: "Prensa francesa Bodum 8 pocillos", precio: 19500},
 {nombre: "Café de especialidad Puerto Blest Altura 1", precio: 2800 },
 {nombre: "Café de especialidad Puerto Blest Colombia", precio: 2450},
 {nombre: "Café de especialidad Puerto Blest Guatemala", precio: 2600},
 {nombre: "Café de especialidad Puerto Blest Kenia", precio: 3550 },
 {nombre: "Café de especialidad Puerto Blest Perú", precio: 2200}
];

let carrito = []

let seleccion = prompt("¿Desea realizar una compra? si/no")

while(seleccion != "si" && seleccion != "no"){
  alert("Por favor ingrese si o no")
  seleccion = prompt("¿Desea realizar una compra? si/no")
}

if(seleccion === "si"){
    alert("Nuestos lista de productos:")
    let nuestrosProductos = productos.map(
        (producto) => producto.nombre + " " + "$" + producto.precio 
    );
    alert(nuestrosProductos.join(" - "))
} else if(seleccion === "no"){
    alert("¡Gracias por su visita al shop!")
}

while(seleccion != "no"){
    let producto = prompt("Agregue un producto al carrito")
    let precio = 0

    if(producto == "Molinillo manual" || producto == "Balanza Hario" || producto == "Frasco con cierre al vacío" || producto == "Cafetera Moka Volturno" ||
      producto == "Chemex 3 tazas" || producto == "Pitcher Fellow" || producto == "Pava Gooseneck plateada" ||  producto == "Pava Gooseneck negra" ||  producto == "Pava Gooseneck blanca" ||  
     producto == "Prensa francesa Holistic" || producto == "Prensa francesa Bodum 3 pocillos" || producto == "Prensa francesa Bodum 8 pocillos" ||
     producto == "Café de especialidad Puerto Blest Altura 1"|| producto == "Café de especialidad Puerto Blest Colombia"||  producto == "Café de especialidad Puerto Blest Guatemala" ||
     producto == "Café de especialidad Puerto Blest Kenia" || producto == "Café de especialidad Puerto Blest Perú"){
        switch(producto){
            case "Molinillo manual":
              precio = 12150;
            break;
            case "Balanza Hario":
              precio = 9800;
            break;
            case "Frasco con cierre al vacío":
             precio = 2380;
             break;
            case "Cafetera Moka Volturno":
              precio = 13500;
            break;
            case "Chemex 3 tazas":
                precio = 11900;
            break;
            case "Pitcher Fellow":
                precio = 5500;
            break;
            case "Pava Gooseneck plateada":
                precio = 22800;
            break;
            case "Pava Gooseneck negra":
                precio = 23800; 
            break; 
            case "Pava Gooseneck blanca":
                precio = 23800;
            break;
            case "Prensa francesa Holistic":
                precio = 17600;
            break;
            case "Prensa francesa Bodum 3 pocillos":
                precio = 15300;
            break;
            case "Prensa francesa Bodum 8 pocillos":
                precio = 19500;
            break;
            case "Café de especialidad Puerto Blest Altura 1":
             precio = 2800 ;
            break;
            case "Café de especialidad Puerto Blest Colombia":
             precio = 2450;
            break;
            case "Café de especialidad Puerto Blest Guatemala":
             precio = 2600;
            break;
            case "Café de especialidad Puerto Blest Kenia":
             precio = 3550;
            break;
            case "Café de especialidad Puerto Blest Perú":
             precio = 2200;
            break;
            default:
             break;
        }
        
      let unidades = parseInt(prompt("Seleccione las unidades que quiera llevar"))

      carrito.push({producto, precio, unidades})

      console.log(carrito)
        
    } else { 
        alert("¡Ups! No contamos con ese producto") 
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion === "no"){
        alert("¡Gracias por su visita al shop!")
        carrito.forEach((carritoFinal) => {
            console.log(`productos: ${carritoFinal.producto} unidades: ${carritoFinal.unidades} Total a pagar: \$${carritoFinal.unidades * carritoFinal.precio}`)
        })
     break;
    }
}