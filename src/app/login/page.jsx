import Link from "next/link";

export default function Home() {
	return (
		<main
			className='flex min-h-screen flex-col items-center justify-between'
			style={{
				backgroundColor: "black",
			}}>
			<div
				style={{
					backgroundColor: "black",
					color: "white",
					flexDirection: "row",
					justifyContent: "space-around",
					margin: "100px",
					padding: "100px",
				}}>
				<div class='login-box'>
					<form>
						<div class='user-box'>
							<input type='text' />
							<label>Username</label>
						</div>
						<div class='user-box'>
							<input type='password' />
							<label>Password</label>
						</div>
						<Link href='/home'>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							Submit
						</Link>
					</form>
				</div>
			</div>
		</main>
	);
}
