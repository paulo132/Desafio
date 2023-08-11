function Login() {  
  const usuario = document.querySelector('#emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  // usuario = usuario.toLowerCase();
  // senha = senha.toLowerCase();
  
  if (usuario == "paulo" && senha == "salvador") {
    window.location.href = "netflix2.html";
  }
  // if (done == 0) {
  //   alert("Dados incorretos, tente novamente");

  // }
}