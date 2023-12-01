
Boilerplate for a NextJS frontend, Strapi backend application. Includes basic API implementation. This project assumes you understand the basics of [data fetching with NextJS 🔗](https://nextjs.org/docs/app/building-your-application/data-fetching). Naturally, there are a bunch of way to include API requests into your code, but this one seemed the simplest at the time. 

---

# 🖥️ API

The API in this case is a simple collection type of dogs with a single data field: breed (string). 

### API Data Table
| API ID       | Breed |
| ----------- | ----------- |
| 1      | Yorkie       |
| 2   | Poodle        |
| 3   | German Shepard        |
| 4   | Beagle        |
| 5   | Chihuahua        |
| 6   | Border Collie        |
| 7   | Husky        |
| 8   | Bulldog        |

# ⚡ Quick Start
In the frontend directory (i'm too lazy to set up yarn) `npm run dev` will pull up your NextJS frontend. In the backend directory `npm run develop` will pull up your Strapi backend. Nothing special. 

# 🔨 Configuration 
- To prerender the code on the page, uncomment the `useEffect()` function included in **frontend > app > page.tsx**.
- You can add more data to the API by launching the backend and visiting localhost:1337. 

