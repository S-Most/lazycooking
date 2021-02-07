import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";
import SingleBlog from "./SingleBlog";

export default function BlogGrid() {
	const [blogData, setBlogData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "blogpost"]{title, slug, mainImage{asset->{_id, url}, alt}}`
			)
			.then((data) => setBlogData(data))
			.catch(console.error);
	}, []);

	return (
		// html markup
		<main className='blogs'>
			<h1> My Blogposts</h1>
			<div className='bloggrid'>
				{blogData &&
					blogData.map((blogPost, index) => (
						<article className='container'>
							<Link
								to={"/blog/" + blogPost.slug.current}
								key={blogPost.slug.current}
							>
								<div className='singleblog' key={index}>
									<h2>{blogPost.title}</h2>
									<img
										src={blogPost.mainImage.asset.url}
										alt={blogPost.mainImage.alt}
									/>
								</div>
							</Link>
						</article>
					))}
			</div>
		</main>
	);
}
