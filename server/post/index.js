module.exports = function(waw) {
	waw.crud('post', {
		get: {
			ensure: waw.next,
			query: function(){ return {} }
		},
		create: {
			ensure: waw.next
		},
		update: {
			ensure: waw.next,
			query: function(req){ return {_id: req.body._id} }
		},
		delete: {
			ensure: waw.next,
			query: function(req){ return {_id: req.body._id} } //добавив req	
		},
		unique: {
			ensure: waw.next,
			query: function(req){ console.log(req.body); return {_id: req.body._id} }
		},
	});
};