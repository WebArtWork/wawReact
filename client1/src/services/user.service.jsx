
let users = localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[];
console.log(users);
const create = (name, cb) => {
	if(!name) return;
	let user = {
		'id': Date.now(),
		'name': name
	};
	users.push(user);
	localStorage.setItem('users', JSON.stringify(users));
	cb(users);
};

const get = () => {
    console.log(users);
};


const update = (id, user) => {

};

const deleteUser = (id, cb) => {
	for (let i = users.length - 1; i >= 0; i--) {
		if(users[i].id === id) users.splice(i, 1);
		localStorage.setItem('users', JSON.stringify(users));
		cb(users);
	}
};


// exports
module.exports = {
	'users': users,
    'create': create,
    'get': get,
    'update': update,
    'deleteUser': deleteUser
};