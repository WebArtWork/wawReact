import {Link} from "react-router-dom";

export default function ForgotPass(props){
	return  <div className="auth-wrapper">
					<div className="auth">
			<div className="auth-title">Reset Password</div>
			<form className="auth-form" onSubmit = {props.submitHandle}>
				<div className="waw-input mb15">
					<span>Email:</span>
					<input  type="text" placeholder="Email" value={props.email} name="email" onChange={props.changeHandler} />
				</div>
				<div className="auth-form__btn"><button className="waw-btn _primary" type="submit">Continue</button></div>
			</form>
			<div className="auth-link">
				<Link to='/'>Login</Link>
				<Link to='/singup'>Sign up</Link>
			</div>
			</div>
		</div>
}