export default {
	name: "blogpost",
	title: "Blogpost",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string"
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96
			}
		},
		{
			name: "cook",
			title: "Cook",
			type: "reference",
			to: { type: "cook" }
		},
		{
			name: "mainImage",
			title: "Main image",
			type: "image",
			options: {
				hotspot: true
			}
		},
		{
			name: "publishedAt",
			title: "Published at",
			type: "datetime"
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent"
		}
	],

	preview: {
		select: {
			title: "title",
			cook: "cook.name",
			media: "mainImage"
		},
		prepare(selection) {
			const { cook } = selection;
			return Object.assign({}, selection, {
				subtitle: cook && `by ${cook}`
			});
		}
	}
};
