export default {
	name: "recipe",
	title: "Recipe",
	type: "document",
	fields: [
		{
			name: "title",
			type: "string"
		},
		{
			name: "duration",
			type: "string"
		},
		{
			name: "serves",
			type: "number"
		},
		{
			name: "course",
			title: "Course",
			type: "string",
			options: {
				list: [
					{ value: "starter", title: "Starter" },
					{ value: "main", title: "Main" },
					{ value: "dessert", title: "Dessert" },
					{ value: "snack", title: "Snack" }
				]
			}
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
			name: "tags",
			type: "array",
			of: [
				{
					type: "string"
				}
			],
			options: {
				layout: "tags"
			}
		},
		{
			name: "link",
			type: "url"
		},
		{
			name: "description",
			type: "text"
		},
		{
			name: "ingredients",
			type: "text"
		},
		{
			name: "preperation",
			type: "text"
		}
	]
};
