import { useState, createContext, useRef } from "react";
import "./Toast.css";

const ToastContext = createContext(null);

const SUCCESS_COLOR = "#32a852";
const WARNING_COLOR = "#bdac19";
const ERROR_COLOR = "#a83232";
const INFO_COLOR = "#392bb5";

function ToastProvider({ children }) {
	const [showing, setShowing] = useState(false);
	const [text, setText] = useState("");
	const [color, setColor] = useState("");

	const timeoutIdRef = useRef(null);

	function success(newText) {
		showToast(newText, SUCCESS_COLOR);
	}

	function warning(newText) {
		showToast(newText, WARNING_COLOR);
	}

	function error(newText) {
		showToast(newText, ERROR_COLOR);
	}

	function info(newText) {
		showToast(newText, INFO_COLOR);
	}

	function showToast(withText, withColor) {
		if (timeoutIdRef.current !== null) {
			clearTimeout(timeoutIdRef.current);
			timeoutIdRef.current = null;
		}

		const id = setTimeout(() => {
			setShowing(false);
			timeoutIdRef.current = null;
		}, 3000);
		timeoutIdRef.current = id;

		setColor(withColor);
		setText(withText);
		setShowing(true);
	}

	return (
		<ToastContext.Provider
			value={{
				success,
				warning,
				error,
				info,
			}}
		>
			{showing && (
				<div id="toastContainer" style={{ backgroundColor: color }}>
					<h2 id="toastText">{text}</h2>
				</div>
			)}
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;

export { ToastContext };
