import { Body } from "./Body/Body";
import Link from "next/link";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div
				style={{
					backgroundColor: "black",
					color: "white",
					flexDirection: "row",
					justifyContent: "space-around",
					margin: "100px",
					padding: "100px",
				}}>
				<h4>Login</h4>
				<div>
					<input type='text' placeholder='User' style={{ margin: "5px" }} />
					<input
						type='password'
						placeholder='Password'
						style={{ margin: "5px" }}
					/>
				</div>
				<Link href='/Body'>Login</Link>
			</div>
		</main>
	);
}
