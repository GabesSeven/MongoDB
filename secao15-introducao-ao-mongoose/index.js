// Conexão Mongoose ao MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
    console.log('Estamos conectados ao MongoDB!')
});

// Criar Schema
const pessoaSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    profissao: String
});

// Criar Model
const Pessoa = mongoose.model("Pessoa", pessoaSchema);

const gabriel = new Pessoa({
    nome: "Gabriel",
    idade: 30,
    profissao: "Programador"
});

// console.log(gabriel.nome);
// console.log(gabriel.idade);

// Inserir dados
/* ERRO: throw new MongooseError('Model.prototype.save() no longer accepts a callback');
gabriel.save(function(err) {
    if(err) {
        console.log(err)
    }
}); */
// gabriel.save()

const joao = new Pessoa({
    nome: "João",
    idade: 25,
    profissao: "Vida Loka!"
});
// joao.save()
// joao.save()
//     .then(() => {
//         console.log('Documento salvo com sucesso.');
//     })
//     .catch((error) => {
//         console.error('Erro ao salvar o documento:', error);
//     });

// Encontrando dados
/* ERRO: throw new MongooseError('Model.prototype.save() no longer accepts a callback');
Pessoa.findOne({ nome: "Gabriel"}, function(err, pessoa) {
    console.log(pessoa);
}); */

// Pessoa.findOne({ nome: "Gabriel" })
//     .then(pessoa => {
//         console.log(pessoa);
//     })
//     .catch(err => {
//         console.error("Erro ao encontrar a pessoa:", err);
//     });

// Inserindo diversos dados
// Pessoa.insertMany([
//     { nome: "Pedro", idade: 40, profissao: "Engenheiro"},
//     { nome: "Pedro", profissao: "Advogada"},
//     { nome: "Pedro", idade: 27},
// ]);

// async function getPessoas() {
//     const pessoas = await Pessoa.find({}).exec()
//     console.log(pessoas);
// }
// getPessoas();

async function getPessoa(nome) {
    const pessoa = await Pessoa.find({ nome: nome }).exec();
    if(pessoa.length === 0) {
        console.log('Esta pessoa não existe!')
    } else {
        console.log(pessoa);
    }
}

// getPessoa('Pedro');

// Pessoa.deleteOne({ nome: 'Pedro' }).exec();

// getPessoa('Pedro');

//Atualização de dados
// Pessoa.updateOne({ nome: "João" }, { profissao: "Juíz" }).exec()

// getPessoa('João');

// Utilizando o where
async function getPessoaNomeIdade(nome, idade) {
    const pessoa = await Pessoa 
                    .where('idade').gte(idade)
                    .where('nome', nome)
                    .exec();

    if(pessoa.length === 0){
        console.log('Esta pessoa não existe!');
    } else {
        console.log(pessoa)
    }

}

getPessoaNomeIdade("Gabriel", 30);