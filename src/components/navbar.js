import React from "react";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className='all-container'>
			<div>
				<ul
					className='navbar'
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}>
					<li>
						<Link className='qwe' href='/home'>
							Home
						</Link>
					</li>
					<li>
						<Link className='qwe' href='/home/another'>
							Another
						</Link>
					</li>
					<li>
						<Link className='qwe' href='/home/contact'>
							Contact
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
						<Link href='/'>Logout</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
