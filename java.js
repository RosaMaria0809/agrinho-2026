function mostrarSecao(id) {
    const secoes = document.querySelectorAll(".secao");
  
    secoes.forEach(secao => {
      secao.classList.remove("ativo");
    });
  
    document.getElementById(id).classList.add("ativo");
  }
  
  // Form simples funcionando
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! 🌱");
      form.reset();
    });
  });