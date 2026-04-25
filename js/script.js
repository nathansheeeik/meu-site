async function carregarNoticias() {
  const container = document.querySelector(".posts");
  container.innerHTML = "<p>Carregando notícias...</p>";

  const res = await fetch("posts.json");
  const posts = await res.json();

  container.innerHTML = "";

  posts.forEach(p => {
    container.innerHTML += `
      <article class="card">
        <img src="${p.imagem || 'https://via.placeholder.com/600x400'}">
        <div>
          <h3>${p.titulo}</h3>
          <p>${p.descricao}</p>
          <small>Atualizado em: ${p.data}</small><br><br>
          <a class="btn" href="${p.link}" target="_blank">Ler original</a>
        </div>
      </article>
    `;
  });
}

carregarNoticias();