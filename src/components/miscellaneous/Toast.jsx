import "./Toast.css";

function Toast({ text, color }) {
	return (
		<div id="toastContainer" style={{ backgroundColor: color }}>
			<h2 id="toastText">{text}</h2>
		</div>
	);
}

export default Toast;
