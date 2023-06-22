/* importando banco */
$mongoimport city_inspections.json -d inspectionsData -c inspections
mongosh
use inspectionsData
show collections
db.inspections.find()

/* criar um índice */
db.inspections.createIndex({certificate_number:1})

/* criar um índice em campo de documento */
db.inspections.createIndex({"address.city":1})

/* verificando quais índices uma de collections possui */
db.inspections.getIndexes()

/* listando índices de um banco */
db.outracollection.insertOne({nome:"Matheus"})
db.outracollection.createIndex({nome:1})
db.getCollectionNames().forEach(function(collection){
    indexes = db[collection].getIndexes()
    print("Índices de " + collection + ":");
    printjson(indexes);
});

/* removendo índices */
db.inspections.dropIndex({certificate_number:1})
db.inspections.getIndexes()

/* removendo todos os índices - o índice padrão do _id não é excluído */
db.inspections.createIndex({business_name:1})
db.inspections.dropIndexes()
db.inspections.getIndexes()

/* plano da consulta, ou seja, como o Mongo realizou uma consulta  */
db.inspections.find({certificate_number:3030353}).explain()
db.inspections.find({certificate_number:{$gt:500000}}).explain()
db.inspections.createIndex({certificate_number:1})
db.inspections.find({certificate_number:{$gt:500000}}).explain()
db.inspections.find({certificate_number:{$gt:500000}, result:"No Violation"}).explain()

/* índices compostos, ou seja, um índice para múltiplos campos  */
db.inspections.createIndex({certificate_number:1,result:1})
db.inspections.getIndexes()
db.inspections.find({certificate_number:{$gt:500000}}).explain()

/* índices de texto, ou seja, facilitam a busca de texto em um campo  */
db.inspections.createIndex({business_name:"text"})
db.inspections.getIndexes()
db.inspections.find({$text:{$search:"HOT DOG"}})
db.inspections.find({$text:{$search:"HOT DOG"}}).explain()


