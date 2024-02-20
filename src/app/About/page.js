import Link from "next/link";

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-between'>
			<p style={{ fontSize: "40px" }}>About</p>
			<p
				style={{
					display: "flex",
					justifyContent: "center",
					margin: "5px",
					padding: "20px",
				}}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque placeat
				blanditiis perspiciatis unde neque dolores fuga provident nostrum
				officia facere cum, libero, repellendus omnis eum tempora accusantium
				minus sunt illo. Modi recusandae officia enim eos. Quia magnam tempora
				iste sunt itaque quidem cumque obcaecati nesciunt vel aliquam quam
				veniam, ratione ducimus eius asperiores placeat, modi nobis? Natus
				debitis illo mollitia unde autem, reiciendis ut perferendis quasi id
				sunt quos quae perspiciatis in voluptate rem vero pariatur magni velit
				quas asperiores, blanditiis molestias neque? Architecto reiciendis
				voluptates eius cum aliquam rerum incidunt cupiditate, quod sint
				veritatis, deleniti esse distinctio ex commodi.
			</p>
			<Link href={"/Body"}>Patra</Link>
		</main>
	);
}
