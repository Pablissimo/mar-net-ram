window.onload = function() {

  //Ter referências a elementos da pagina
  var form = document.getElementById('message-form');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');
  


  // Cria um WebSocket
  var socket = new WebSocket('ws://echo.websocket.org');


  //Manipulador de erros ocorridos
  socket.onerror = function(error) {
    console.log('WebSocket erro: ' + error);
  };


  // Mensagem que aparece se for conectado ao servidor.
  socket.onopen = function(event) {
    socketStatus.innerHTML = 'Conectado a: ws://echo.websocket.org';
    socketStatus.className = 'open';
  };


  //Escreve mensagens na tela que foram enviadas pelo servidor.
  socket.onmessage = function(event) {
    var message = event.data;
    messagesList.innerHTML += '<li class="received"><span>Recebido:</span>' +
                               message + '</li>';
  };


  // Mensagem que aparece quando for desconectado do servidor.
  socket.onclose = function(event) {
    socketStatus.innerHTML = 'Desconectado do WebSocket';
    socketStatus.className = 'closed';
  };


  //Envia a mensagem pelo formulário
  form.onsubmit = function(e) {
    e.preventDefault();

    // Recupera a mensagem do TextArea
    var message = messageField.value;

    //  envia a mensagem através do WebSocket
    socket.send(message);

    // Adiciona a mensagem na lista
    messagesList.innerHTML += '<li class="sent"><span>Enviado:</span>' + message +
                              '</li>';

    // Limpa o textarea
    messageField.value = '';

    return false;
  };


  // Fecha a conecção Websocket quando é clicado no botão.
  closeBtn.onclick = function(e) {
    e.preventDefault();

    // Fecha WebSocket
    socket.close();

    return false;
  };
};