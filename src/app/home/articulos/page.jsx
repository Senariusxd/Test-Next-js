import Link from "next/link";

async function Loadpost() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();
	//await new Promise((resolve) => setTimeout(resolve, 3000));
	return data;
}

async function PostArt() {
	const posts = await Loadpost();

	return (
		<div>
			<div style={{fontSize: "25px"}}>Articulos:</div>
			<div>
				{posts.map((post) => (
					<div key={post.id} style={{ border: "1px" }}>
						<br />
						<Link href={`/home/articulos/${post.id}`}>
							<h3 style={{ fontSize: "20px" }}>
								{post.id}.{post.title}
							</h3>
						</Link>

						<p>{post.body}</p>
						<Link href='#' style={{ border: "1px solid" }}>
							Click
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default PostArt;
