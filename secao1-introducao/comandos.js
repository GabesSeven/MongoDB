https://github.com/matheusbattisti/curso_mongodb
yT(W4mj@u!z0_8}uG8>|K1Y9~4!7sd7:]^E@7^x|

sudo systemctl start mongod
mongosh
show dbs
use primeirobanco
db.primeiracollection.insertOne({ nome: "Guilherme", idade: 38 })
db.primeiracollection.findOne({})
db.primeiracollection.insertOne({ nome: "João", idade: 78, profissao: "Programador" })
db.primeiracollection.find()
