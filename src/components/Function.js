"use client";
import { useState } from "react";
import Link from "next/link";
import "../styles/App.css";

export const Count = () => {
	const [count, setCount] = useState(0);

	const aum = () => {
		setCount(count + 1);
	};

	const dis = () => {
		setCount(count - 1);
	};

	const reset = () => {
		setCount(0);
	};

	return (
		<div>
			<p className='text'>La cuenta es: {count}</p>
			<div className='Counter'>
				<button
					className='btnState'
					style={{
						border: "1px solid",
						borderRadius: "5px",
						backgroundColor: "rgb(34, 30, 29)",
						color: "White",
						padding: "2px",
						margin: "2px",
					}}
					onClick={aum}>
					+
				</button>
				<button
					className='btnState'
					style={{
						border: "1px solid",
						borderRadius: "5px",
						backgroundColor: "rgb(34, 30, 29)",
						color: "White",
						padding: "2px",
						margin: "2px",
					}}
					onClick={dis}>
					--
				</button>
				<button
					className='btnState'
					style={{
						border: "1px solid",
						borderRadius: "5px",
						backgroundColor: "rgb(34, 30, 29)",
						color: "White",
						padding: "2px",
						margin: "2px",
					}}
					onClick={reset}>
					Reset
				</button>
			</div>
		</div>
	);
};

export const Imagen = () => {
	const [img, setImg] = useState("./images/Screenshot 1.png");
	const [counter, setCount] = useState(0);

	const pass = () => {
		setCount(counter + 1);

		if (counter === 0) {
			setImg("./images/Screenshot 2.png");
		} else if (counter === 1) {
			setImg("./images/Screenshot 3.png");
		} else if (counter === 2) {
			setCount(0);
		}
	};

	return (
		<div>
			<p style={{ color: "white" }}>Cuenta: {counter}</p>
			<img src={img} alt='descption' />
			<div>
				<button
					style={{
						border: "1px solid",
						borderRadius: "5px",
						backgroundColor: "rgb(34, 30, 29)",
						color: "White",
						padding: "2px",
						margin: "2px",
					}}
					onClick={pass}>
					Pass
				</button>
			</div>
		</div>
	);
};

export function InputField() {
	const [texto, setTexto] = useState("");

	function actualizar(evento) {
		setTexto(evento.target.value);
	}
	return (
		<div>
			<div>
				<input
					style={{ borderRadius: "5px", color: "black" }}
					type='text'
					onChange={actualizar}
				/>
				<p>Input text: {texto.length}</p>
			</div>
		</div>
	);
}

export function Toggle() {
	const [show, setShow] = useState(false);

	const alternar = () => {
		setShow(!show);
	};

	return (
		<div>
			<button
				style={{
					border: "1px solid",
					borderRadius: "5px",
					backgroundColor: "rgb(34, 30, 29)",
					color: "White",
				}}
				onClick={alternar}>
				Show/Hide Text
			</button>
			{show && <h3>shh!... I`m hiding from the user</h3>}
		</div>
	);
}

export function ColorSwitch() {
	const [color, setColor] = useState();

	const cambiar = (evento) => {
		setColor(evento.target.value);
	};

	return (
		<div>
			<select
				style={{ borderRadius: "5px", color: "black" }}
				onChange={cambiar}>
				<option value=''>Select a color</option>
				<option value='red'>Red</option>
				<option value='blue'>Blue</option>
				<option value='green'>Green</option>
				<option value='yellow'>Yellow</option>
			</select>
			<br />
			<br />
			<div
				style={{
					width: "100px",
					height: "100px",
					backgroundColor: color,
				}}></div>
		</div>
	);
}
