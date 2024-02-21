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
				<Link
					style={{
						border: "1px solid",
						borderRadius: "5px",
						backgroundColor: "rgb(34, 30, 29)",
						color: "White",
						padding: "2px",
						margin: "2px",
					}}
					href='/home'>
					Login
				</Link>
			</div>
		</main>
	);
}
