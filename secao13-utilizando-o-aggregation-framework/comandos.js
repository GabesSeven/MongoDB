/* utilizando o $bucket */ 
use booksCollections
show collections
db.books.aggregate([
    {
        $bucket:{
            groupBy:"$pageCount",
            boundaries: [100,200,300,400,500,600,700],
            default:"OTHERS",
            output:{
                "count":{$sum:1}
            }
        }
    }
])

/* utilizando o $bucketAuto - define os buckets de forma automática */ 
db.books.aggregate([
    {
        $bucketAuto:{
            groupBy:"$categories",
            buckets: 3,
        }
    }
])

/* detalhes com $collStats - retorna dados de uma collection */ 
db.books.aggregate([{$collStats:{queryExecStats:{},count:{}}}])

/* utilizando o $sort - ordena resultados, 1 crescente, -1 decrescente */ 
db.books.aggregate([
    {
        $sort:{
            pageCount:-1,
        }
    }
])

db.books.aggregate([
    {
        $sort:{
            pageCount:1,
        }
    }
])

/* utilizando o $limit - limitar número de resultados */ 
db.books.aggregate([
    {$sort:{pageCount:-1}},
    {$limit:3},
]).pretty()

/* utilizando o $match - filtro além dos operadores de agrupamento */ 
db.books.aggregate([
    {$sort:{pageCount:-1}},
    {$match:{authors:"Gavin King"}},
    {$limit:3},
]).pretty()

/* utilizando o $out - criar collections a partir do aggregation */ 
db.books.aggregate([
    {$match:{categories:"Java",pageCount:{$gt:800}}},
    {$limit:5},
    {$out:"bigjavabooks"}
]).pretty()

/* utilizando o $project - resgatar apenas campos desejados */ 
db.books.aggregate([
    {$match:{authors:"Gavin King"}},
    {$sort:{pageCount:-1}},
    {$limit:3},
    {$project:{title:1}}
]).pretty()

db.books.aggregate([
    {$match:{authors:"Gavin King"}},
    {$sort:{pageCount:-1}},
    {$limit:3},
    {$project:{title:1,pageCount:1}}
]).pretty()

/* utilizando o $sample - retorna amostragem aleatória (embaralha os dados) */ 
db.books.aggregate([
    {$match:{categories:"Java"}},
    {$sort:{pageCount:-1}},
    {$project:{title:1,authors:1}},
    {$sample:{size:10}}
])

/* utilizando o $skip - pula determinado número de dados */ 
db.books.aggregate([
    {$match:{categories:"Microsoft"}},
    {$sort:{pageCount:-1}},
    {$project:{title:1,pageCount:1}}
]).pretty()

db.books.aggregate([
    {$match:{categories:"Microsoft"}},
    {$sort:{pageCount:-1}},
    {$project:{title:1,pageCount:1}},
    {$limit:2}
]).pretty()

db.books.aggregate([
    {$match:{categories:"Microsoft"}},
    {$sort:{pageCount:-1}},
    {$project:{title:1,pageCount:1}},
    {$skip:2},
    {$limit:2}
]).pretty()

/* utilizando o $unwind - descontrói um array permitindo trabalhar com o resultado de cada item */ 
db.books.aggregate([
    {$unwind:"$categories"},
    {$project:{categories:1}}
])

db.books.aggregate([
    {$unwind:"$categories"},
    {$project:{authors:1}}
])

/* utilizando o $unset - remover um ou mais campos de retorno */ 
db.books.aggregate([
    {$match:{categories:"PowerBuilder"}},
    {$sort:{pageCount:-1}},
    {$unset:"_id"}
]).pretty()

db.books.aggregate([
    {$match:{categories:"PowerBuilder"}},
    {$sort:{pageCount:-1}},
    {$unset:["_id","status"]}
]).pretty()

/* $count em aggregation */ 
db.books.aggregate([
    {$match:{categories:"Java"}},
    {$count:"Contagem"}
])

db.books.aggregate([
    {$match:{categories:"Java"}},
    {$limit:5},
    {$count:"Contagem"}
])

db.books.aggregate([
    {$match:{categories:"Java",pageCount:{$gt:950}}},
    {$count:"Contagem"}
])