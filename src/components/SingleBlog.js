import { useEffect, useState } from "react";
import sanityClient from "../client";
import { useParams } from "react-router-dom"
import BlockContent from "@sanity/block-content-to-react"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

export default function SingleBlog() {

	const [singleBlogPost, setSingleBlogPost] = useState(null);
	const {slug} = useParams();

	useEffect(() => {
		sanityClient.fetch(`*[slug.current == "${slug}"]{
			title,
			_id,
			slug,
			mainImage{
				asset->{
					_id,
					url
				}
			},
			body,
			"name": cook->name,
			"cookImage": cook->image
		}`).then((data) => setSingleBlogPost(data[0]))
		.catch(console.error)
	}, [slug])

	if (!singleBlogPost) return <div>Loading...</div>;

	return (
		<main>
			<article>
				<header className = "singleBlogHeader">
					<h1>{singleBlogPost.title}</h1>
						<div className ="cookCart">
							<img src={urlFor(singleBlogPost.cookImage).url()} alt={singleBlogPost.name}/>
							<p>{singleBlogPost.name}</p>
						</div>
					<img src={singleBlogPost.mainImage.asset.url} alt={singleBlogPost.mainImage.alt}/>
				</header>
				<div className="blogContent">
					<BlockContent 
						blocks={singleBlogPost.body}
						projectId="txooti7h"
						dataset="production">
					</BlockContent>
				</div>
			</article>
		</main>
	);
}
