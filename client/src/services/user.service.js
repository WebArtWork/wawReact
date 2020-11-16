
const userService = {
    changeRole
};



// export default function user_service(props){
// 	window.user_service ={
// 		 show_users () {
// 			window.http.get('/api/user/get', (resp) =>{
// 				return resp;
// 			})
// 		},
		function changeRole(user){
			user.is.admin = !user.is.admin
			window.http.post('/api/user/updateadmin', user)
		 }
	 	
//	}
// }

export default userService