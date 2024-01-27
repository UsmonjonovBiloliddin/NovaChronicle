import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
	const { error } = useSelector((state) => state.auth);

	let errorMassage = useCallback(() => {
		return Object.keys(error).map((name) => {
			const masage = error[name].join(", ");
			return `${name} - ${masage}`;
		});
	}, [error]);



	return (
		error != null &&
		errorMassage().map((error) => {
			return <div key={error} className="alert alert-danger" role="alert">{error}</div>;
		})
	);
};

export default ValidationError;
