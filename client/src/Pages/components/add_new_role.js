export default function AddNewRole(props){

		return (<div>
					<span>ROLE {props.index+1}</span>
					<input type="text" defaultValue = {props.new_roles}/>
					<button onClick={props.deleteRoles.bind(null, props.index)}>Delete
					</button>
				</div>
		)
}