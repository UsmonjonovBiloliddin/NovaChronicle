import { useDispatch, useSelector } from "react-redux";
import { image } from "../../constants/index";
import { Input } from "../../ui";
import {
	signUserStart,
	signUserSuccess,
	signUserError,
} from "../../slice/auth";
import { useEffect, useState } from "react";
import AuthService from "../../service/auth";
import { useNavigate } from "react-router-dom";
import {ValidationError} from "..";
const Login = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const navigate = useNavigate()
	const dispatch = useDispatch();
	const { isLoading , loggedIn} = useSelector((state) => state.auth);

	const loginHandler = async (e) => {
		e.preventDefault();
		dispatch(signUserStart());
		const user = { email, password };
		try {
			const response = await AuthService.userLogin(user);
			dispatch(signUserSuccess(response.user));
			navigate('/')
		} catch (error) {
			dispatch(signUserError(error.response.data.errors));
		}
	};

	useEffect(() => {
		if(loggedIn){
			navigate('/')
		}
	} , [loggedIn])

	return (
		<form className="text-center w-25 mx-auto">
			<img className="mb-4" src={image} alt="" width="72" height="57" />
			<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
			<ValidationError />
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
				onClick={loginHandler}
				className="btn btn-primary w-100 py-2"
				type="submit"
			>
				{isLoading ? "Loading..." : "Login"}
			</button>
			<p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
		</form>
	);
};

export default Login;
