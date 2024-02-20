"use client";
import React from "react";
import { Count } from "./Function";
import { Imagen } from "./Function";
import { contacts } from "./list";
import { emojipedia } from "./list";
import { InputField } from "./Function";
import { Toggle } from "./Function";
import { ColorSwitch } from "./Function";

export function Body() {
	return (
		<div>
			<div
				className='container'
				style={{
					display: "flex",
					justifyContent: "center",
					border: "1px solid #eb7100",
				}}>
				<div style={{ padding: "50px" }}>
					<Count />
				</div>
				<div style={{ padding: "50px" }}>
					<Imagen />
				</div>
			</div>

			<br />
			<br />
			<p style={{ color: "red", fontSize: "20px" }}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptatem
				accusantium accusamus necessitatibus, reiciendis eos eligendi animi
				distinctio et nihil beatae sint assumenda asperiores cupiditate,
				nesciunt itaque sapiente iusto iure, aliquam repellat? Sed, ratione
				quae? Ipsa praesentium, soluta quisquam delectus voluptatum deserunt
				consectetur totam nesciunt temporibus fuga error maiores sit?
			</p>

			<div className='contacts'>
				{contacts.map((cont) => (
					<div className='cont' key={cont.id}>
						<p style={{ fontSize: "25px", color: "yellow" }}>
							Nombre: {cont.name}
						</p>
						<img
							style={{ borderRadius: "45px" }}
							src={cont.imgURL}
							alt={cont.name}
						/>
						<p>Phone: {cont.phone}</p>
						<p>Email: {cont.email}</p>
					</div>
				))}
			</div>
			<div className='emoji'>
				{emojipedia.map((emoji) => (
					<div className='contemoji' key={emoji.id}>
						<p
							style={{
								fontSize: "60px",
								display: "flex",
								justifyContent: "center",
							}}>
							{emoji.emoji}
						</p>
						<p
							style={{
								fontSize: "25px",
								color: "yellow",
								display: "flex",
								justifyContent: "center",
							}}>
							{emoji.name}
						</p>
						<p style={{ display: "flex", justifyContent: "center" }}>
							{emoji.meaning}
						</p>
					</div>
				))}
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					color: "white",
				}}>
				<div
					className='inputs'
					style={{
						alignItems: "center",
					}}>
					<h4>Length Text</h4>
					<InputField />
				</div>
				<div
					className='inputs'
					style={{
						alignItems: "center",
					}}>
					<h4>Show & Hide</h4>
					<Toggle />
				</div>
				<div
					className='inputs'
					style={{
						alignItems: "center",
					}}>
					<h4>Like a chameleon</h4>
					<ColorSwitch />
				</div>
			</div>

			<footer className='footer'>Hecho por Senas</footer>
		</div>
	);
}

export default Body;
