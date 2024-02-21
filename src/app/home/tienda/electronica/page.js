import Link from "next/link";

export default function Electronica() {
	return (
		<main className='flex flex-col items-center justify-between'>
			<h3 style={{ fontSize: "40px" }}>Electronica</h3>
			<uol style={{ fontSize: "25px" }}>
				<li>Moviles</li>
				<li>Computadoras</li>
				<li>Otros</li>
			</uol>
			<br />
			<Link href={"/home/tienda/"}>Patra</Link>
		</main>
	);
}
