import {Link} from "react-router-dom";

export default function pass_recover_list(props){
	return(
			<div className="auth-wrapper">
				<div className="auth">
					<div className="auth-title">Set New Password</div>
					<form className="auth-form" onSubmit={props.addChangePass}>
						<div className="waw-input mb15">
							<span>Email:</span>
							<input type="text" placeholder="Code" name="code" onChange={props.code} />
						</div>
						<div className="waw-input mb15">
							<span>Password:</span>
							<input type="password" placeholder="New password" value={props.state.password} name="password" onChange={props.changePass}/>
						</div>
						<div className="auth-form__btn"><button className="waw-btn _primary" type="submit">Save</button></div>
					</form>
					<div className="auth-link">
						<Link to='/'>Login</Link>
						<Link to='/singup'>Sing up</Link>
					</div>
				</div>
			</div>
	)
}
