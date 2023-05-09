/* embedded documents */
use relationships
db.embedded.insertOne({
    nome: "Gabriel",
    idade: 30,
    endereco: {
        rua: "rua das flores",
        numero: "1234",
        complemento: "casa 36",
    }
})
db.embedded.findOne()
const gabriel = db.embedded.findOne()
gabriel.endereco
gabriel.endereco.rua
gabriel.endereco.numero
db.embedded.insertOne({
    nome: "João",
    idade: 40,
    endereco: {
        casa: {    
            rua: "rua das flores",
            numero: "1314",
            complemento: "casa 54",
        },
        trabalho: {
            rua: "rua das árvores",
            numero: "120 C",
            complemento: "galpão 30",
        }
    }
})
const joao = db.embedded.findOne({nome:"João"})
joao.endereco.casa.rua
joao.endereco.trabalho.rua

/* one to one */
db.pessoa.insertOne({
    nome: "Matheus",
    idade: 30,
    profissao: "Programador",
})
const p = db.pessoa.findOne()
p.nome
db.enderecos.insertOne({
    rua: "rua das flores",
    numero: "1414",
    complemento: "casa",
    pessoa_id: p._id,
})
db.pessoas.find()
db.enderecos.find().pretty()
db.enderecos.find({pessoa_id: p._id})
const e = db.enderecos.findOne({pessoa_id: p._id})
e.rua

/* one to many */
db.pessoa.insertOne({
    nome: "Gustavo",
    idade: 29,
    profissao: "Gerente",
})
db.pessoas.find()
const gustavo = db.pessoa.findOne({nome:"Gustavo"})
gustavoId = gustavo._id
const matheus = db.pessoa.findOne({nome:"Matheus"})
matheusId = matheus._id
db.compras.insertMany([
    { produtos: ["Livros", "Celular"], pessoa_id: matheusId },
    { produtos: ["Mouse", "Teclado"], pessoa_id: matheusId },
    { produtos: ["Agenda"], pessoa_id: gustavoId },
    { produtos: ["Barbeador", "Suporte de monitor"], pessoa_id: gustavoId },
])
db.compras.find()
db.compras.find({pessoa_id:matheusId})
db.compras.find({pessoa_id:gustavoId})
db.pessoa.insertOne({
    nome: "Pedro",
    idade: 44,
    profissao: "Motorista",
})
const pedroId = db.pessoa.findOne({nome:"Pedro"})._id
db.compras.find({pessoa_id:pedroId}).count()

/* many to many */
db.cursos.insertMany([
    {nome: "PHP avançado"},
    {nome: "JavaScript básico"},
    {nome: "Banco de dados NoSQL"},
])
gustavo
const php = db.cursos.findOne({nome:"PHP avançado"})
const js = db.cursos.findOne({nome:"JavaScript básico"})
db.curso_pessoa.insertMany([
    {curso_id:php._id, pessoa_id:matheus._id},
    {curso_id:js._id, pessoa_id:matheus._id},
    {curso_id:js._id, pessoa_id:gustavo._id},
])
//todos os alunos que cursam JS
const idsAlunos = [];
db.curso_pessoa.find({curso_id:js._id}).forEach(function(aluno){
    idsAlunos.push(aluno.pessoa_id);    
});
idsAlunos
db.pessoa.find({_id:{$in:idsAlunos}})
db.pessoa.find()
const pedro = db.pessoa.findOne({nome:'Pedro'})
pedro
db.curso_pessoa.insertOne({curso_id:js._id, pessoa_id:pedro._id})
db.curso_pessoa.find()
//todos os alunos que cursam JS
const idsAlunos2 = [];
db.curso_pessoa.find({curso_id:js._id}).forEach(function(aluno){
    idsAlunos2.push(aluno.pessoa_id);    
});
db.pessoa.find({_id:{$in:idsAlunos2}})


