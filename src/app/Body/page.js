import Link from "next/link";
import { Body } from "./Body";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<div className='app'>
				<nav className='all-container'>
					<div>
						<ul
							className='navbar'
							style={{
								display: "flex",
								justifyContent: "space-between",
							}}>
							<li>
								<a className='qwe' href='#'>
									Home
								</a>
							</li>
							<li>
								<a className='qwe' href='#'>
									Another
								</a>
							</li>
							<li>
								<a className='qwe' href='#'>
									Contact
								</a>
							</li>
							<li>
								<a className='qwe' href='/About'>
									About
								</a>
							</li>
							<li className='search-bar'>
								<input type='text' placeholder='text..' />
								<button>Search</button>
							</li>
							<li>
								<Link href='/'>Logout</Link>
							</li>
						</ul>
					</div>
				</nav>
				<Body />
			</div>
		</main>
	);
}
