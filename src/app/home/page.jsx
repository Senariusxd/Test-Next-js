import React from "react";
import { contacts } from "../../components/list";
import { emojipedia } from "../../components/list";
import { Count } from "../../components/Function";
import { Imagen } from "../../components/Function";
import { InputField } from "../../components/Function";
import { Toggle } from "../../components/Function";
import { ColorSwitch } from "../../components/Function";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["300", "400", "500"],
	style: ["italic", "normal"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<div className={roboto.className}>
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

				
			</div>
		</main>
	);
}
