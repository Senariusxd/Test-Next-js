import Link from "next/link";

export default function Deportes() {
	return (
		<main className='flex flex-col items-center justify-between'>
			<h3 style={{ fontSize: "40px" }}>Deportes</h3>
			<uol style={{ fontSize: "25px" }}>
				<li>Futbol</li>
				<li>Ciclismo</li>
				<li>Natacion</li>
			</uol>
			<br />
			<Link href={"/home/tienda/"}>Patra</Link>
		</main>
	);
}
