/* strings - pode ser aspas simples ou duplas */
$mongosh
db.strings.insertOne({nome:"Matheus"})
db.strings.insertOne({nome:'Ricardo'})
db.strings.find()
db.strings.insertOne({rua:'Rua "rua" teste'})
db.strings.insertOne({rua:"Rua 'rua' teste_2"})
db.strings.find()

/* verificando tipo de dados */
db.strings.find({nome:"Matheus"})
const matheus = db.strings.findOne({nome:"Matheus"})
matheus
matheus.nome
typeof matheus
typeof matheus.nome

/* arrays */
db.arrays.insertOne({carros:["BMW","Ferrari","Fusca"]})
db.arrays.find()
const carros = db.arrays.findOne()
carros.carros
carros.carros[0]
carros.carros[1]
carros.carros[2]
db.arrays.insertOne({caracteristicas:["Matheus",30,"Programador",true]})
db.arrays.find()

/* datas - formato ISO */
db.dates.insertOne({data: new Date()})
db.dates.insertOne({nome: "Matheus", created_at: new Date()})
db.dates.find()

/* document */
db.documents.insertOne({nome:"Matheus",desc:{profissao:"Programador", hobbies:["Estudar","Ler","Caminhar"]}})
db.documents.find()
db.documents.insertOne({nome:"João",desc:{hobbies:["Jogar","Academia"], cor_dor_olhos:"Castanhos"}})
db.documents.find().pretty()

/* booleano */
db.bools.insertOne({nome:"Mathues", esta_trabalhando:true})
db.bools.find()
const pessoa = db.bools.findOne()
typeof pessoa.esta_trabalhando
db.bools.insertOne({nome:"João", esta_trabalhando:false})
db.bools.find()

/* números - double é o padrão, porém tem como especificar o inteiro */
db.numbers.insertOne({double:12.2,outro_double:50,inteiro:NumberInt("5")})
db.numbers.find()
db.numbers.updateOne({}, {$set:{inteiro:5.2}})
db.numbers.find()
