
export default function user(){
	const us = {
		is: {},
		data: {},
		users: [],
		update: ()=>{
			//window.core.afterWhile(us, us.save);
			window.http.post('/api/user/update', {
				name: us.name,
				data: us.data
			}, (resp)=>{});		
		},
		// save: ()=>{
		// 	window.http.post('/api/user/update', {
		// 		name: us.name,
		// 		data: us.data
		// 	}, (resp)=>{});			
		// },
		change_password: (oldPass, newPass)=>{
			window.http.post('/api/user/changePassword', {
				newPass: newPass,
				oldPass: oldPass
			}, resp => {
				if(resp) alert('successfully changed password');
				else alert('failed to change password');
			});
		},
		logout: ()=>{
			window.http.get('/api/user/logout');
			localStorage.removeItem('waw_user');
			window.render.call('logout');
		},
		create: (user)=>{
			window.http.post('/api/user/create', {email: user} ,(resp)=>{})
		},
		delete: (id)=>{
			for (var i = us.users.length - 1; i >= 0; i--) {
				if(us.users[i]._id == id){
					us.users.splice(i, 1);
				}
			}	
			window.http.post('/api/user/deleteadmin',  {_id: id}, (resp)=>{
				window.render.call('user list');
			});
		},
		set: user=>{
			for(let each in user){
				us[each] = user[each];
			}
		}
	};
	window.us = us;
	if(localStorage.getItem("waw_user")){
		us.set(JSON.parse(localStorage.getItem("waw_user")));
		window.http.get('/api/user/me', us.set);
	}

	// window.mongo.get('user', users=>{

	// });
	// window.mongo.on('user post', ()=>{
	// 	window.render.call('my page');
	// });
	// window.mongo.fetch('user', {name: 'me'}, user=>{

	// });
	window.us.fetch = function(_id){
		return this.mongo.fetch('user', {_id: _id});
		/*
		if(this._users[_id]) return this._users[_id];
		else this._users[_id] = {};
		window.mongo.fetch('user', {_id: _id}, user=>{
			for(let each in user){
				this._users[_id][each] = user[each];
			}
			window.render.call();
		});
		return this._users[_id];
		*/
	}
	// window.mongo.create('user', {email: 'crackeraki@gmail.com'}, user=>{

	// });
	// window.mongo.update('user', {email: 'crackeraki@gmail.com'}, user=>{

	// });
	// window.mongo.delete('user', {_id: 'dqw15q4wdqdw654qdw6qw4d'}, user=>{

	// });

	/*
		<div>{{post.author}}</div> dwq564dqw98d4qw9d4wq98
		<div>{{window.us.fetch(post.author).name}}</div>
	*/

	window.http.get('/api/user/get', users=>{
		us.users = users;
		us._users = {};
		for (var i = users.length - 1; i >= 0; i--) {
			us._users[users[i]._id] = users[i];
		}
		window.render.call('user list');
		//window.render.call('sing up');
	//	console.log(us);
	});
}