import { createContext, useRef, useState } from "react";
import "./Toast.css";

const ToastContext = createContext(null);

const GREEN = "#388c3e";
const RED = "#cc2929";
const YELLOW = "#ccae29";

function ToastProvider({ children }) {
	const [showing, setShowing] = useState(false);
	const [text, setText] = useState("");
	const [color, setColor] = useState(YELLOW);

	const timeoutRef = useRef(null);

	function success(text) {
		console.log("success", text);
		setToast(text, GREEN);
	}

	function warning(text) {
		console.log("warning", text);
		setToast(text, YELLOW);
	}

	function error(text) {
		console.log("error", text);
		setToast(text, RED);
	}

	function setToast(text, color) {
		setShowing(true);
		setText(text);
		setColor(color);

		if (timeoutRef.current != null) {
			console.log("clearTimeout");
			clearTimeout(timeoutRef.current);
		}
		timeoutRef.current = setTimeout(() => {
			console.log("timeout executing");
			timeoutRef.current = null;
			setShowing(false);
		}, 3000);
	}

	console.log("rendering toast", showing);

	return (
		<ToastContext.Provider value={{ success, warning, error }}>
			{showing && (
				<div id="toastContainer" style={{ backgroundColor: color }}>
					<h2 id="toastText">{text}</h2>
				</div>
			)}
			{children}
		</ToastContext.Provider>
	);
}

export { ToastContext };

export default ToastProvider;
