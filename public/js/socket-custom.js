var socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta servidor:', resp);
});
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor:', mensaje);
});