# NCKU ARCH 80th Anniversary

This is the source code for the NCKU ARCH 80th Anniversary website.

## 🚀 Project Structure

The project is built using Astro.js and Tailwind CSS. Here's a quick look at the project structure:

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

alternatively, you can use `yarn` to run the commands.

## Disclaimer

This website is based on the Astro theme "Positivus" by [Olga Averchenko](https://www.figma.com/@olgaaverchenko).

## Technologies
This project is tested with the following technologies:
- yarn 1.22.19

## Notes
`blogs` are part of the template, but it is replaced with the `blog` in this project, which is copied from the brutal template.

## TODO
- [ ] remove brutal-ui dependencies(`@eliancodes/brutal-ui`) and sharp(devDependencies)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
