import Link from "next/link";

export default function Tienda() {
	return (
		<main className='flex flex-col items-center justify-between'>
			<h3 style={{ fontSize: "40px" }}>Tienda</h3>
			<uol style={{ fontSize: "25px" }}>
				<li style={{ color: "red", textDecorationLine: "underline" }}>
					<Link href={"/home/tienda/electronica"}>Electronica</Link>
				</li>
				<li style={{ color: "Blue", textDecorationLine: "underline" }}>
					<Link href={"/home/tienda/deportes"}>Deportes</Link>
				</li>
				<li style={{ color: "green", textDecorationLine: "underline" }}>
					<Link href={"/home/tienda/utiles"}>Utiles</Link>
				</li>
			</uol>
			<br />
			<Link href={"home"}>Patra</Link>
		</main>
	);
}
