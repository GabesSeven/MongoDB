/* inserindo dados no banco */
db.create.insertOne({ nome:"Matheus", idade:30, esta_trabalhando: true, hobbies:["Jogar, Programar"] })
db.create.insertOne({ nome:"Maria", idade:25 })
db.create.find()


/* EXERCÍCIO 5 */
db.provas.insertOne({ nome_aluno:"Gabriel", provas:[10,10] })
db.provas.insertOne({ nome_aluno:"Galiudo", provas:[5,5] })
db.provas.find()

/* inserindo vários dados */
db.provas.insertMany([{nome: "Maria", notas: [10, 5, 6]}, {nome:"Gustavo", notas: [2, 3, 3]}])
db.provas.find()

/* EXERCÍCIO 6 */
db.mercado.insertMany([{nome:"Feijão", preco:6.00, estoque:60}, {nome:"Arroz", preco:25.50, estoque:43}, {nome:"Macarrão", preco:2.99, estoque:148}])
db.mercado.find()


/* método insert */
db.mercado.insert({nome:"Banana", preco:4.50})
db.mercado.insert([{nome:"Sabão", preco:14.20}, {nome:"Margarina", preco:5.00}])
db.mercado.find()


/* criando ao id manualmente */
db.mercado.insertOne({_id:"1001", nome:"Vassoura", preco:14.99})
db.mercado.insertOne({_id:"1002", nome:"Escova", preco:5.99})
db.mercado.find()

/* write concern - limita o tempo de execução para não derrubar o servidor */
db.mercado.insertMany([{nome:"Tesoura", preco:12.99}, {nome:"Peito de Frango", preco:14.99}, {nome:"Ameixa", preco:2.50}, {w:"majority", wtimeout:200}])


/* TAREFA 2 */
use dadosDeCarros
db.carros.insertMany([{_id:"1", marca:"Ford", modelo:"Fiesta", ano_fabricacao:2015, km_rodados:50.000}, {_id:"2", marca:"Jeep", modelo:"XJ", ano_fabricacao:2018, km_rodados:2.000}, {_id:"3", marca:"Volkswagen", modelo:"Fusca", ano_fabricacao:1976, km_rodados:450.000}, {_id:"4", marca:"Mercedes", modelo:"Classe A", ano_fabricacao:2008, km_rodados:40.000}])

db.carros.insertMany([
	{_id:"1", marca:"Ford", modelo:"Fiesta", ano_fabricacao:2015, km_rodados:50.000}, 
	{_id:"2", marca:"Jeep", modelo:"XJ", ano_fabricacao:2018, km_rodados:2.000}, 
	{_id:"3", marca:"Volkswagen", modelo:"Fusca", ano_fabricacao:1976, km_rodados:450.000}, 
	{_id:"4", marca:"Mercedes", modelo:"Classe A", ano_fabricacao:2008, km_rodados:40.000}
])

db.carros.find().pretty()

