import { Link } from "react-router";

function Login() {
	return (
		<div>
			<form>
				<h2>Log In</h2>
				<div>
					<label>Email </label>
					<input type="text"></input>
				</div>
				<div>
					<label>Password </label>
					<input type="text"></input>
				</div>
				<button>Submit</button>
				<Link to="/signup">Don&apos;t Have an Account?</Link>
			</form>
		</div>
	);
}
export default Login;
