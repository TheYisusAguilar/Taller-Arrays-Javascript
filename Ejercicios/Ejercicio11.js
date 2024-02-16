//Ejercicio 11:
//Un pequeño negocio necesita un sistema para gestionar su inventario de productos. El sistema debe permitir al usuario:
//• Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de
//objetos)
//• Listar todos los productos: mostrar información completa de cada producto.
//• Buscar un producto por nombre: mostrar información del producto si existe.
//• Eliminar un producto: eliminar producto del inventario.
//• Actualizar la cantidad en stock: modificar la cantidad disponible de un producto.


let inventario = [];


function agregarProducto(nombre, descripcion , precio, cantidad, categoria) {
    let producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria
    };
    inventario.push(producto);
    console.log("Producto agregado al inventario:", producto);
}


function listarProductos() {
    console.log("Inventario de productos:");
    inventario.forEach(producto => console.log(producto));
}


function buscarProducto(nombre) {
    let productoEncontrado = inventario.find(producto => producto.nombre === nombre);
    if (productoEncontrado) {
        console.log("Producto encontrado:", productoEncontrado);
    } else {
        console.log("No se encontró ningún producto con ese nombre.");
    }
}


function eliminarProducto(nombre) {
    inventario = inventario.filter(producto => producto.nombre !== nombre);
    console.log("Producto eliminado del inventario:", nombre);
}


function actualizarStock(nombre, nuevaCantidad) {
    let producto = inventario.find(producto => producto.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        console.log("Stock actualizado para el producto", nombre, "nueva cantidad:", nuevaCantidad);
    } else {
        console.log("No se encontró ningún producto con ese nombre.");
    }
}


agregarProducto("Camisa", "Camisa de tela fria", 60000, 50, "Ropa");
agregarProducto("Pantalón", "Pantalón cargo", 89000, 30, "Ropa");
listarProductos();
buscarProducto("Camisa");
eliminarProducto("Pantalón");
listarProductos();
actualizarStock("Camisa", 40);
listarProductos();
