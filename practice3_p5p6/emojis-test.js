var emojis = require('./emojis');

emojis.findEmojiById('01', function(err,emoji){
	if (err)
		console.log(err);

	console.log(emoji.name);
});

emojis.getAll(function(err,emojis){
	if (err)
		console.log(err);

	console.log(emojis);
});

emojis.updateEmoji('01', {name: 'pout',description:'pouty face'}, function(err, emojis){
	if (err)
		console.log(err)

	console.log(emojis);
});

emojis.deleteEmojiByID('01', function(err,emojis){
	if (err)
		console.log(err);

	console.log(emojis);
});

emojis.addEmoji(({name: 'cry',description:'crying face'}), function(err, emojis){
	if (err)
		console.log(err);

	console.log(emojis);
}); //push() doesn't work, emojisList is of type object, not array

emojis.addEmoji(({name: 'depressed',description:'depressed face'}), function(err, emojis){
	if (err)
		console.log(err);

	console.log(emojis);
});
