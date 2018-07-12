var express = require('express');
var emojisRouter = express.Router();
var emojis = require("./emojis");

emojisRouter.route('/')
.get(function(req, res, next){
  emojis.getAll(function(err, emojis){
    if(err) throw err;
    console.log("get all emojis");
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.json(emojis);
    res.end()
  });
})
.post(function(req, res, next){
  emojis.addEmoji(req.body, function(err, emojis){
    if(err) throw err;
    console.log('emoji added');
    // var id = emoji._id
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.json(emojis);
    res.end()
  });
});

emojisRouter.route('/:id')
.get(function(req, res, next){
  emojis.findEmojiById(req.params.id, function(err, emoji){
    if(err) throw err;
    console.log("get emoji by ID: " + req.params.id);
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.json(emoji);
    res.end()
  });
})
.put(function(req, res, next){
  emojis.updateEmoji(req.params.id, req.body, function(err,emojis){
    if(err) throw err;
    console.log("update emoji ID: " + req.params.id);
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.json(emojis);
    res.end()
  });
})
.delete(function(req, res, next){
  emojis.deleteEmojiByID(req.params.id, function(err, emojis){
    if(err) throw err;
    res.writeHead(200, {'Content-Type':'text-plain'});
    res.json(emojis);
    res.end()
  });
})

module.exports = emojisRouter;
