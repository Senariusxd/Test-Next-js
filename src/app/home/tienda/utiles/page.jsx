import Link from "next/link";

export default function Utiles() {
	return (
		<main className='flex flex-col items-center justify-between'>
			<h3 style={{ fontSize: "40px" }}>Utiles</h3>
			<uol style={{ fontSize: "25px" }}>
				<li>Utiles de Construccion</li>
				<li>Utiles de Cocina</li>
				<li>Utiles de la Casa</li>
			</uol>
			<br />
			<Link href={"/home/tienda/"}>Patra</Link>
		</main>
	);
}
