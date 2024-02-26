"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import "../styles/App.css";

export default function Navbar() {
	const [show, setShow] = useState(false);

	const handleMouseEnter = () => {
		setShow(true);
	};

	const handleMouseLeave = () => {
		setShow(false);
	};

	return (
		<nav className='all-container' style={{color: "white"}}>
			<div>
				<ul
					className='navbar'
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<li><a href='/home' style={{fontSize: "20px"}}>Project</a></li>
					<li>
						<Link className='qwe' href='/home'>
							Home
						</Link>
					</li>
					<li
						className={show ? "tienda-active" : ""}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<Link href='/home/tienda'>Tienda</Link>
						{show && (
							<div className='tienda-dropdown'>
								<ul
									style={{
										color: "white",
										backgroundColor: "grey",
										padding: "5px",
									}}>
									<li>
										<Link href='/home/tienda/electronica'>Electronica</Link>
									</li>
									<li>
										<Link href='/home/tienda/deportes'>Deportes</Link>
									</li>
									<li>
										<Link href='/home/tienda/utiles'>Utiles</Link>
									</li>
								</ul>
							</div>
						)}
					</li>
					<li>
						<Link className='qwe' href='/home/articulos'>
							Articulos
						</Link>
					</li>
					<li>
						<Link className='qwe' href='/home/about'>
							About
						</Link>
					</li>
					<li className='search-bar'>
						<input
							style={{ borderRadius: "5px", color: "black" }}
							type='text'
							placeholder='text..'
						/>
						<button>Search</button>
					</li>
					<li>
						<Link href='/login'>Logout</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
