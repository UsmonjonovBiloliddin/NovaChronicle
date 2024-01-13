import { useState } from "react";
import { image } from "../../constants/index";
import {
	registerError,
	registerStart,
	registerSuccess,
} from "../../slice/auth";
import { Input } from "../../ui";
import { useSelector, useDispatch } from "react-redux";
import AuthService from "../../service/auth";

const Register = () => {
	const [userName, setuserName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const dispatch = useDispatch();
	const { isLoading } = useSelector((state) => state.auth);

	const registerHandler = async (e) => {
		e.preventDefault();
		dispatch(registerStart());

		const user = {
			username: userName,
			email,
			password,
		};
		try {
			const response = await AuthService.userRegister(user);
			dispatch(registerSuccess(response.user));
		} catch (error) {
			dispatch(registerError());
		}
	};

	return (
		<form className="text-center w-25 mx-auto">
			<img className="mb-4" src={image} alt="" width="72" height="57" />
			<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

			<Input
				label={"UserName"}
				placeholder={"Username"}
				state={userName}
				setState={setuserName}
			/>
			<Input
				label={"Email address"}
				type={"email"}
				id={"floatingInput"}
				placeholder={"name@example.com"}
				state={email}
				setState={setEmail}
			/>
			<Input
				label={"Password"}
				type={"password"}
				id={"floatingPassword"}
				placeholder={"Password"}
				state={password}
				setState={setPassword}
			/>

			<button
				disabled={isLoading}
				onClick={registerHandler}
				className="btn btn-primary w-100 py-2"
				type="submit"
			>
				{isLoading ? "Loading..." : "Register"}
			</button>
			<p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
		</form>
	);
};

export default Register;
