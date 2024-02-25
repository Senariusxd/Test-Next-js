import Link from "next/link";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between' style={{
			backgroundColor: "black",}}>
			<div>
				<Link href="/login" style={{color: 'white'}}>Login</Link>
			</div>
		</main>
	);
}
