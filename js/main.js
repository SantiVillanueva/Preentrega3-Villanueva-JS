//Para esta pre entrega intente usar los elementos para hacer un proyecto de un ecommerce, basado en el emprendimiento de un amigo.
let carrito = [];

const contenedorStock = document.querySelector("#contenedor-stock");
const btnComprar = document.querySelectorAll(".btncomprar");
const btnEliminar =document.querySelectorAll(".btneliminar")

function subirproductos (){
    productos.forEach(producto => {       
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML =` <img src="${producto.imagen}" alt="${producto.modelo}">
                        <p>Producto: ${producto.modelo}</p>
                        <p>Precio: $ ${producto.precio} </p>
                        <button class="btncomprar" id="${producto.id}">Comprar</button> `;
        contenedorStock.append(div);
        })
        agregarAlCarrito()        
    }
subirproductos();


function agregarAlCarrito(){
  let botonComprar = document.getElementsByClassName("btncomprar");
  for (const botones of botonComprar) {
    botones.addEventListener ("click",()=>{ 
  let productoAgregado = productos.find((producto) => producto.id == botones.id);
  carrito.push(productoAgregado);
    mostrarCarrito(productoAgregado); 
    totalCarrito();
    localStorage.setItem("carrito", JSON.stringify(carrito));
})
}
}
function totalCarrito(){
  const total = document.getElementById("total")
  total.innerText = carrito.reduce((acc,el)=> acc + el.precio,0)
}
function mostrarCarrito(productoAgregado){
  const carrito = document.getElementById("carrito-compra");
let li = document.createElement('li')
li.innerHTML = `Productos: ${productoAgregado.modelo} Precio: ${productoAgregado.precio}`;
carrito.append(li);
}


function recuperar (){
  let guardarLS = JSON.parse (localStorage.getItem("carrito"))
  if(guardarLS){
    guardarLS.forEach(producto=> {
      carrito.push(producto);
      mostrarCarrito(producto); 
      totalCarrito();      
    });
  }
}
recuperar()
      




