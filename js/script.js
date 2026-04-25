async function carregarNoticias() {
  const container = document.querySelector(".posts");

  try {
    const res = await fetch("posts.json");
    const posts = await res.json();

    container.innerHTML = "";

    posts.forEach(p => {
      container.innerHTML += `
        <article class="card">
          <img src="${p.imagem || 'img/logo.png'}" alt="Notícia">
          <div>
            <h3>${p.titulo}</h3>
            <p>${p.descricao || "Confira essa notícia que está dando o que falar."}</p>
            <small>Atualizado em: ${p.data || ""}</small><br>
            <a class="btn" href="${p.link}" target="_blank">Ler original</a>
          </div>
        </article>
      `;
    });

  } catch (erro) {
    container.innerHTML = "<p>Não foi possível carregar as notícias.</p>";
  }
}

carregarNoticias();