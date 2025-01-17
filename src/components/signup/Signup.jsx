import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ToastContext } from "../miscellaneous/Toast";

/*
Rules -
1. Two or more words separated by spaces
2. Must be alphabetical characters or hyphens or apostrophes, but nothing else
*/
const nameRegex = /^([A-Za-z-']+ )+([A-Za-z-']+)$/;

/*
Rules -
1. XXXX@XXXX.YYY
2. Can have multiple periods on either side, but can't end in a period
    elijah.@gmail.com
    elijah@gmail.
    elijah@gmail.com
3. Everything will be lower case
4. Alphabetical, numbers, hyphens, no other special characters other than exactly one @
*/
const emailRegex = /^([a-z-]+\.)*([a-z-])+@([a-z-]+\.)+[a-z]{3}$/;

/*
Rules -
1. 8 or more characters
2. Must have one lowercase
3. One upper case
4. One special character
5. One digit
*/
const passwordRegex =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

/*
One regular expression each for:
- 8 or more valid characters
- Contains an upper case letter
- Contains a lower case letter
- Contains a number somewhere
- Contains a special character

if(!passwordLengthRegex.test || !passwordUpperCaseRegex.test || ...)
*/

function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();

	const { error } = useContext(ToastContext);

	function submitForm() {
		if (!nameRegex.test(name)) {
			error("Invalid Name!");
			return;
		}

		if (!emailRegex.test(email)) {
			error("Invalid Email!");
			return;
		}

		if (!passwordRegex.test(password)) {
			error("Invalid Password!");
			return;
		}

		if (password !== confirmPassword) {
			error("Passwords Do Not Match!");
			return;
		}

		/*
       
        Password -
        1. 8+ characters
        2. Must have an upper case, lower case, number, special character (!@#$%^&*)


        RegEx
        Pattern that is applied to a string
        If the pattern matches the string, it is a success
        Otherwise, if the pattern does not match the string, it is a failure
        */

		console.log("Here is where we would call our API");
		navigate("/products");
	}

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					submitForm();
				}}
			>
				<h2>Sign In</h2>
				<div>
					<label>Full Name </label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div>
					<label>Email </label>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div>
					<label>Password </label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<div>
					<label>Confirm Password </label>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					></input>
				</div>
				<button type="submit">Submit</button>
				<br></br>
				<Link to="/login">Already Have an Account?</Link>
			</form>
		</div>
	);
}
export default Signup;
