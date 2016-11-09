var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

//In New York
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');

  db.contactlist.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function (req, res) {
  console.log(req.body);
  db.contactlist.insert(req.body, function(err, doc) {
    res.json(doc);
  });
});
	
app.delete('/contactlist/:id',function(req,res){
	var id = req.params.id;
	console.log(id);
	db.contactlist.remove({_id: mongojs.ObjectId(id)},function(err, doc) {
    res.json(doc);
  });
})
app.listen(3000);

console.log("Server Running on port 3000");
// <input ng-model="test">
// {{test}}
	
	// person1={
//    	name: 'tim',
//    	email:'tim@email.com',
//    	number:'(760)312-4109'
//    };
//    person2={
//    	name: 'tom',
//    	email:'tommy@email.com',
//    	number:'(760)231-4154'
//    };
//    person3={
//    	name: 'tam',
//    	email:'tam@email.com',
//    	number:'(760)907-4423'
//    };
//  var contactlist= [person1,person2,person3];
//    res.json(contactlist);