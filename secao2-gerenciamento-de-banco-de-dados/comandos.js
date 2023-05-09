https://github.com/matheusbattisti/curso_mongodb
https://www.mongodb.com/docs/database-tools/installation/installation/
yT(W4mj@u!z0_8}uG8>|K1Y9~4!7sd7:]^E@7^x|

sudo systemctl start mongod
mongosh
show dbs

/* inicializa DB ou altera de DB */
use segundobanco
db.teste.insertOne({ a:5 })

/* cria DB */
db /* mostra banco de dados atual */
db.testedois.insertOne({ b:5 })
cls /* limpa tela */

/* EXERCÍCIO 2 */
use quartobanco
db.collquartobanco.insertOne({ nome:"Gabriel" })
show dbs
cls
db.minhacollection.insertOne({ c:1 })
db.minhacoll.insertOne({ a:1 })
cls

/* encontrando dados */
db.pessoas.insertOne({ nome:"Maria" })
db.pessoas.insertOne({ nome:"João" })
db.pessoas.find()
db.pessoas.find({})
db.pessoas.find({ nome: "João" })
db.pessoas.find({ nome: "Maria" })

/* função pretty */
db.pessoas.insertOne({ nome:"Gabriel", idade:30, hobbies:["Programar", "Ler", "Correr", "Jogar"], profissao:"Programador", saldoNaConta: 150000, esta_trabalhando: true })
db.pessoas.find({}).pretty()

/* collection implícita */
db.createCollection("minhacolecao", { capped: true, size:1000, max:3 })
db.minhacolecao.insertOne({ a:2 })
db.minhacolecao.insertOne({ a:2 })
db.minhacolecao.insertOne({ a:2 })
db.minhacolecao.find()

/* exibir todas collection */
show collections
db.teste.insertOne({ b:1 })
show collections
db.createCollection("minhacolecao2")
show collections

/* EXERCÍCIO 3 */
db.dados.insertOne({ nome:"Gabriel", salario:12000 })
db.dados.insertOne({ nome:"Amanda", salario:12000 })
db.dados.find()
db.dados.find({ nome:"Gabriel" })
db.dados.find({ salario:12000 })

/* removendo collection */
show collections
db.minhacoll.drop()
show collections
db.minhacolecao2.drop()
show collections

/* removendo banco de dados */
use segundobanco
db.dropDatabase()

/* EXERCÍCIO 4 */
show dbs
use quartobanco
show collections
db.pessoas.drop()
show collections
db.dropDatabase()
show dbs

/* importando dados em JSON */
/* formato do arquivo JSON: 
	{ nome: "Gabriel", idade: "29"} 
	{ nome: "Guilherme", idade: "24"}
*/
$ mongoimport books.json -d booksData -c books
mongosh
show dbs
use booksData
db.books.find().pretty()

/* exportando dados em JSON */
$ mongoexport -c books -d booksData -o bookExample.json

/* exportando mais de uma collection */
use meuBanco
db.pessoas.insertOne({nome:"Matheus", idade:30})
show collections
db.enderecos.insertOne({rua:"Rua teste", numero:"123"})
show collections
$ mongodump -d meuBanco -o meuBanco

/* importando mais de uma collection */
$mongosh
use meuBanco
db.dropDatabase()
$mongorestore meuBanco
$mongosh
show dbs

/* monitoramento do MongoDB */
mongostat

/* Forma simples de remover banco de dados */
Mongo().getDBNames().forEach(function(db){
	if(['admin', 'config', 'local'].indexOf(db) < 0) {
		Mongo().getDB(db).dropDatabase();
	}
});

show dbs


/* TAREFA 1 */
use pessoas
db.pessoa.insertOne({nome:"Maria", idade:"20"})
db.pessoa.insertOne({nome:"Felipe", idade:"30"})
db.pessoa.insertOne({nome:"Gustavo", idade:"40"})
db.pessoa.find().pretty()
exit()
$mongoexport -c pessoa -d pessoas -o pessoasDatabase.json
$mongoimport pessoasDatabase.json -c pessoa_novo -d pessoas_novo
$mongodump -d pessoas -o pessoasDatabase
$mongorestore pessoasDatabase
mongosh
show dbs
