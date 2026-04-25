async function gerarPost() {
  const nome = document.getElementById("nome").value;
  const tema = document.getElementById("tema").value;
  const resultado = document.getElementById("resultado");

  if (!nome || !tema) {
    alert("Preencha o nome e o tema!");
    return;
  }

  resultado.innerHTML = "<p>Gerando com IA...</p>";

  const resposta = await fetch("http://127.0.0.1:3001/gerar", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ nome, tema })
  });

  const dados = await resposta.json();

  resultado.innerHTML = `
    <article class="card">
      <div>
        <h3>🤖 Post gerado por IA</h3>
        <p>${dados.texto || dados.erro}</p>
        <button onclick="copiarPost()">Copiar postagem</button>
      </div>
    </article>
  `;
}

function copiarPost() {
  const texto = document.getElementById("resultado").innerText;
  navigator.clipboard.writeText(texto);
  alert("Post copiado!");
}