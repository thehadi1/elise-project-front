import { useState } from "react";
import "../App.css";
import axios from "axios";
//import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions";
import { useSelector } from "react-redux";

const Signin = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch(); // dispatch est une fonction de redux permettant de déclencher la distribution des variables

	const { Token } = useSelector((state) => state); // grâce au Hook useSelector, on peut récupérer une variable stockée dans Redux. En l'occurence on récupère ici la variable (state) Token

	const logConnect = async () => {
		try {
			const res = await axios.post("http://localhost:3001/api/v1/user/login", {
				email: username,
				password: password,
			});
			console.log(res.data); // verif mail password
			// une fois que l'authentification se passe bien, on déclanche l'action loginUser en lui passant comme paramètre le token envoyé depuis le serveur

			dispatch(loginUser(res.data.body.token));
		} catch (error) {
			alert("Merci de vérifier votre saisie");
		}
	};

	return (
		<nav className="main-nav">
			<h1>page SignIn</h1>
			<main className="main bg-dark">
				<section className="sign-in-content">
					<i className="fa fa-user-circle sign-in-icon"></i>
					<h1>Sign In</h1>
					{Token}
					<form>
						<div className="input-wrapper">
							<label for="username">Username</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="input-wrapper">
							<label for="password">Password</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="input-remember">
							<input type="checkbox" id="remember-me" />
							<label for="remember-me">Remember me</label>
						</div>
					</form>
				</section>
			</main>

			<button onClick={logConnect}>Signin</button>
		</nav>
	);
};

export default Signin;
