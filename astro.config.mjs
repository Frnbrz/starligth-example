import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Pasamelo",
			social: {
				youtube: "https://youtu.be/l_TK3sAeicg",
			},
			sidebar: [
				{
					label: "Navidad",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: " Año Nuevo", slug: "navidad/nuevo" },
						{ label: " Navidad", slug: "navidad/navidad" },
						{ label: " Papá Noel, San Nicolás", slug: "navidad/noel" },
						{ label: " Reyes Magos", slug: "navidad/reyes" },
					],
				},
				// {
				// 	label: "Pésame",
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: "Pésame", slug: "pesame" },
				// 	],
				// },
				// {
				// 	label: "Felicitaciones",
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: "Felicitaciones", slug: "felicitaciones" },
				// 	],
				// },
				// {
				// 	label: "Relaciones de pareja",
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: "Relaciones de pareja", slug: "relaciones" },
				// 	],
				// },
				// {
				// 	label: "Amistad",
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: "Amistad", slug: "amistad" },
				// 	],
				// },
			],
		}),
	],
})
