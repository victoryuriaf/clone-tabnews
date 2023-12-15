// request é o que vem de fora (requisição)
// response é o que vou responder de dentro (resposta)

function status(request, response) {
  response.status(200).json({ chave: "Alunos do curso.dev são pessoas acima da média" });
}

export default status;
