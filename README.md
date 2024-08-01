<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,scss" />
</p>
This is the source code to iMovix, your ultimate video streaming experience.

🎬 What is iMovix?
iMovix is a video streaming platform that showcases video content from various third-party sources within a user-friendly and visually appealing interface.

🌟 Features
Seamless progress tracking - optionally synced across devices.
Save your favorite shows and movies, and easily keep track of your watchlist.
Clean and straightforward design - focused solely on the content you want.
Built with React, Vite, and SCSS for a modern and responsive user interface.
🌿 Philosophy
iMovix is designed to be straightforward and user-centric. We focus on providing essential features that are polished to perfection.
Our goal is to create a lightweight streaming platform that prioritizes simplicity and usability.

Additionally, we aim to make hosting as cost-effective and straightforward as possible. The site operates as a static website with a proxy, with an optional backend for cross-device synchronization.

All content is sourced from third-party providers, with client-side scraping ensuring that no media files are stored on our servers. Videos are streamed directly from the original sources.

🚧 Limitations
As a static site, Server-Side Rendering (SSR) is not supported.
To maintain low hosting costs, the number of proxied requests is limited.
For affordability, content is not streamed through the proxy, so only streams without CORS protection are supported.
🔧 Running Locally for Development
To get started locally, clone the repository. Then run the following commands in the root of the repository:

```bash
npm install
npm run dev
```

You'll also need to create an .env file to set up your environment. Refer to .env for guidance and add your <a href="https://www.themoviedb.org/">TMDB API</a>

To build the production files, run:
```bash
npm run build
```


📬 Contact
[Email](mailto:imtinanfakhar879@gmail.com)
