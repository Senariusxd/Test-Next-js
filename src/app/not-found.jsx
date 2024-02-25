import Link from "next/link";
export default function NotFound() {
	return (
		<section
			className='flex flex-col items-center justify-between'
			style={{ margin: "250px" }}>
			<p style={{ fontSize: "50px" }}>Error 404 mi Loco</p>
			<p style={{ fontSize: "45px" }}>Tas Asao</p>
			<br />
			<Link
				style={{
					border: "2px solid",
					borderColor: "red",
					borderRadius: "5px",
					backgroundColor: "grey",
				}}
				href={"/home"}>
				volver
			</Link>
		</section>
	);
}
