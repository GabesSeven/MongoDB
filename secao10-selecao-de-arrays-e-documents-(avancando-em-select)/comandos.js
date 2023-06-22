/* selecionando dados de embedded document */
use masterselect
cls
db.pessoas.insertMany([
    {
        nome: "Matheus",
        caracteristicas: {
            peso: "88Kg",
            altura: "1.8m",
            cor_dos_olhos: "verdes",
            idade: 30,
        }

    },
    {
        nome: "Pedro",
        caracteristicas: {
            peso: "92Kg",
            altura: "1.65m",
            cor_dos_olhos: "castanhos",
            idade: 25,
        }

    },
    {
        nome: "Maria",
        caracteristicas: {
            peso: "68Kg",
            altura: "1.92m",
            cor_dos_olhos: "azuis",
            idade: 33,
        }

    },
    {
        nome: "Carla",
        caracteristicas: {
            peso: "72Kg",
            altura: "1.72m",
            cor_dos_olhos: "castanhos",
            idade: 19,
        }

    },
])
db.pessoas.find()
db.pessoas.find({"caracteristicas.cor_dos_olhos":"castanhos"})

/* seleção em embedded com operador */
db.pessoas.find({"caracteristicas.idade":{$gt:30}})
db.pessoas.find({"caracteristicas.idade":{$gte:30}})
db.pessoas.find({"caracteristicas.idade":{$lt:28}})

/* EXERCÍCIO 15 */
db.pessoas.find({"caracteristicas.peso":{$in:['80Kg','92Kg']}, "caracteristicas.idade":{$gt:20}})

/* encontrar item específico de array - esse número precisar estar contido no array */
db.alunos.insertMany([
    {
        nome:"Matheus",
        matematica: [8,7,10,8]
    },
    {
        nome:"Pedro",
        matematica: [8,8,9,7]
    },
    {
        nome:"Maria",
        matematica: [6,4,10,9]
    },
])
db.alunos.find()
db.alunos.find({matematica:6})
db.alunos.find({matematica:8})
db.alunos.find({matematica:[8,8,9,7]})

/* encontrar alguns valores do array - apenas alguns valores dentro de um array parcial - a ordem não importa! */
db.alunos.find({matematica:{$all:[8,7]}})
db.alunos.find({matematica:{$all:[7,8]}})
db.alunos.find({matematica:{$all:[10]}})
db.alunos.find({matematica:{$all:[9, 10]}})
db.alunos.find({matematica:{$all:[8, 8]}})

/* consulta pelo tamanho do array */
db.alunos.find({matematica:{$size:4}})
db.alunos.insertOne({nome:"Josias", matematica:[10,10]})
db.alunos.find({matematica:{$size:4}})
db.alunos.find({matematica:{$size:2}})

/* seleção de array de documentos - precisa ser o document com os valores exatos para retornar */
db.produtos.insertMany([
    {
      nome: "Camisa",
      variacoes: [
        {
          cor: "Vermelha",
          tamanho: "P",
          qtd: 10
        },
        {
          cor: "Azul",
          tamanho: "M",
          qtd: 25
        },
              {
          cor: "Verde",
          tamanho: "G",
          qtd: 48
        },
      ]
    },
    {
        nome: "Calça",
        variacoes: [
        {
            cor: "Preta",
            tamanho: 42,
            qtd: 12
        },
        {
            cor: "Cinza",
            tamanho: 46,
            qtd: 20
        },
        {
            cor: "Azul",
            tamanho: 46,
            qtd: 32
        }
      ]
    }
])
db.produtos.find()
db.produtos.find({"variacoes":{cor:"Verde", tamanho:"G",qtd:48}})
db.produtos.find({variacoes:{cor:"Verde", tamanho:"G",qtd:48}})
db.produtos.find({"variacoes":{cor:"Verde", tamanho:"G",qtd:49}})
db.produtos.find({"variacoes":{cor:"Cinza", tamanho:46 ,qtd:20}})

/* array de documentos e operadores - se houver existencia de um, retorna todos os arrays */ 
db.produtos.find({"variacoes.qtd":{$gt:30}})
db.produtos.find({"variacoes.qtd":{$lt:11}})

/* utilizando o $elementMatch - traz registros utilizando múltiplos critérios de documents diferentes */ 
db.produtos.find({"variacoes":{$elemMatch:{tamanho:{$gt:40},cor:"Azul"}}}).pretty()
db.produtos.find({"variacoes":{$elemMatch:{qtd:{$gt:20},cor:"Azul"}}}).pretty()

/* EXERCÍCIO 16 */ 
db.produtos.find({"variacoes":{$elemMatch:{tamanho:{$lt:48}, qtd:{$gte:30}}}})

/* retornando campos específicos */ 
db.pessoas.find({})
db.pessoas.find({}, {nome:1, "caracteristicas.idade":1})

/* removendo o id do retorno */ 
db.pessoas.find({}, {_id:0, nome:1, "caracteristicas.idade":1})

/* removendo campos específicos */ 
db.pessoas.find({}, {"caracteristicas.altura":0, "caracteristicas.cor_dos_olhos":0})

/* TAREFA 5 */ 
db.alunos.updateMany({}, {$set:{quimica:[8,8,8,8]}})
db.alunos.find()
db.alunos.insertOne({
    nome:'José',
    matematica: [6,6,6,6],
    quimica:[10,10],
})
db.alunos.find({quimica:10})
db.alunos.find({quimica:{$size:2}})
db.alunos.updateOne({quimica:{$size:2}}, {$set:{falta_prova:true}})
db.alunos.find({falta_prova:true})

