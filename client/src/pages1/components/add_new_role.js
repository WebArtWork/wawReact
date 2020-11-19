export default function AddNewRole(props){

		return (<div className="users-field">
				 	<div className="waw-input">
				  		<label>
							<span>ROLE {props.index+1}</span>
							<input type="text" defaultValue = {props.new_roles} />
						</label>
						</div>
						<button className="waw-btn _danger" 
						 onClick={props.deleteRoles.bind(null, props.index)}>Delete
						 </button>
				</div>
		)
}