var SelectChange = document.getElementById('IdiomaSelect');

SelectChange.addEventListener("change",function(){
  console.log(SelectChange.value);
  if(SelectChange.value == "English"){
    window.location.href = 'https://www.thewanderlustcr.com/index.html';
  }else{
    window.location.href = 'https://www.thewanderlustcr.com/Español/Inicio.html';
  }
})