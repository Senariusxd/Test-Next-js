import Link from "next/link";

export default function About() {
	return (
		<main className='flex flex-col items-center justify-between'>
			<p style={{ fontSize: "40px" }}>Another</p>
			<ul>
				Another Services
				<li>Services 1</li>
				<li>Services 2</li>
				<li>Services 3</li>
			</ul>
			<Link href={"/home"}>Patra</Link>
		</main>
	);
}
