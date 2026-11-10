
const usuarios = [
  { id: 1, nome: 'Ana', email: 'ana@email.com' },
  { id: 2, nome: 'Bruno', email: 'bruno@email.com' },
  { id: 3, nome: 'Carla', email: 'carla@email.com' },
  { id: 4, nome: 'Diego', email: 'diego@email.com' },
  { id: 5, nome: 'Elisa', email: 'elisa@email.com' },
];

const posts = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  titulo: `Post número ${i + 1}`,
  texto: 'Conteúdo de exemplo do post.',
}));

const produtos = [
  { id: 1, nome: 'Camiseta', preco: 49.9 },
  { id: 2, nome: 'Calça jeans', preco: 129.9 },
  { id: 3, nome: 'Camisa social', preco: 99.9 },
  { id: 4, nome: 'Tênis de corrida', preco: 299.9 },
  { id: 5, nome: 'Boné', preco: 39.9 },
  { id: 6, nome: 'Mochila', preco: 159.9 },
  { id: 7, nome: 'Caneca térmica', preco: 59.9 },
  { id: 8, nome: 'Fone de ouvido', preco: 199.9 },
  { id: 9, nome: 'Carregador', preco: 89.9 },
  { id: 10, nome: 'Garrafa de água', preco: 34.9 },
];

function rotear(url) {
  const [caminho, consulta = ''] = url.split('?');
  const params = {};

  consulta.split('&').forEach(par => {
    const [chave, valor = ''] = par.split('=');
    if (chave) {
      params[chave] = decodeURIComponent(valor);
    }
  });

  const [recurso, id] = caminho.split('/').filter(Boolean);

  if (recurso === 'usuarios') return usuarios;

  if (recurso === 'posts' && id) {
    return posts.find(p => p.id === Number(id));
  }

  if (recurso === 'posts' && params.pagina) {
    const limite = Number(params.limite || 10);
    const inicio = (Number(params.pagina) - 1) * limite;
    return posts.slice(inicio, inicio + limite);
  }

  if (recurso === 'posts') return posts;

  if (recurso === 'produtos') {
    const termo = (params.busca || '').toLowerCase();
    return produtos.filter(p =>
      p.nome.toLowerCase().includes(termo)
    );
  }

  return undefined;
}

export function fakeFetch(url, opcoes = {}) {
  const { atraso = 800, falhar = false } = opcoes;

  return new Promise(resolve => {
    setTimeout(() => {
      const dados = falhar ? undefined : rotear(url);
      let status = 200;

      if (falhar) status = 500;
      else if (dados === undefined) status = 404;

      resolve({
        ok: status === 200,
        status,
        json: async () =>
          JSON.parse(JSON.stringify(dados ?? null)),
      });
    }, atraso);
  });
}
