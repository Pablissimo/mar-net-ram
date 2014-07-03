var qualiom_events = {};

function init()  
{
  
  var msg=document.getElementById('msg');
  msg.innerHTML='Init - ok1';
  
  var cam=document.getElementById('cam');
  var count=0;
  var log_count=0;
  
  window.log=function(msg)
  {
    log_count++;
    var msg= '#' +log_count+ ': ' +msg;
    for(var i=1;i<=5;i++)
    {
        var log=document.getElementById('log_'+i)
        var old=log.innerHTML;
        log.innerHTML=msg;
        msg=old;
    }    
  };
     
  msg.innerHTML='Init - ok2';
  
  document.getElementById('op1').onclick=function()
  {
      count++;
      msg.innerHTML='Opcao 1 - ok - '+count;
  };
  
  msg.innerHTML='Init - ok3';
  
  function posicionaCamera() 
  {
      count++;
      msg.innerHTML='AutoScan_onCameraPreview - '+count;
	  var x=cam.offsetLeft*window.devicePixelRatio;
	  var y=cam.offsetTop*window.devicePixelRatio;
	  var w=cam.offsetWidth*window.devicePixelRatio;
	  var h=cam.offsetHeight*window.devicePixelRatio;
 	  AutoScan.posicionaCamera(x,y,w,h); 
  };
  
  msg.innerHTML='Init - ok4'; 
  window.AutoScan_onCameraPreview=posicionaCamera;
  
  document.getElementById('ativaCamera').onclick=function()
  {
      count++;
	  AutoScan.ativaCamera();
      msg.innerHTML='Opcao abrir camera - '+count;
  };
  
  msg.innerHTML='Init - ok5';
   document.getElementById('desativaCamera').onclick=function()
  {
      count++;
	  AutoScan.desativaCamera();
      msg.innerHTML='Opcao desativa camera - '+count;
  };
 
  function tirarFoto()
  {
      count++;
	  AutoScan.tirarFoto(count);
      msg.innerHTML='tirar Foto - '+count;
  }; 
  
  document.getElementById('tirarFoto').onclick=tirarFoto;
  window.AutoScan_onCameraTap=tirarFoto; 
  
  if (typeof AutoScan === 'undefined')
  {
    window.log('Obj AutoScan nao existe');
    window.AutoScan={
      InitOK: function(){},
      ativaCamera: function(){
        cam.innerHTML='<video autoplay></video>';
        window.AutoScan_onCameraPreview();
        
        window.URL = window.URL || window.webkitURL ;
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

        var onFailSoHard = function(e)
        {
            console.log('failed',e);
        };
        
        var video = document.querySelector('video');

        if(navigator.getUserMedia)
        {
          navigator.getUserMedia({video: true},function(stream) {
           video.src = window.URL.createObjectURL(stream);
          },onFailSoHard);
          setTimeout(window.AutoScan_onCameraPreview,500);
        } 
      },
      posicionaCamera: function(left,top,width,height)
      { 
      }
    };
  }
  
  msg.innerHTML='Init - ok6';  
  AutoScan.InitOK();
  
  msg.innerHTML='Init - ok7';
}

