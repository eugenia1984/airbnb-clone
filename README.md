#  Full Stack Airbnb clone!

This is a project in [Next.js](https://nextjs.org/) with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), creating an **Airbnb** clone.


---

## Demo 📦

📌 (bulding...)

---

## Features 📢


✔️ TailwindCSS and shadcnUI design. Tailwind animations and effects.

✔️ Full responsiveness

✔️ Sign in page with Kindle

✔️ Landing page with the list of the houses for rent

✔️ Add your house for rent

✔️ Add / Delete favorite house for rent


---

## Technologies 🛠️


- [<img width="30" height="30" src="https://img.icons8.com/plasticine/30/react.png" alt="react"/> **React**](https://react.dev/), [**React-DOM**](https://www.npmjs.com/package/react-dom) and  [**React icons**](https://react-icons.github.io/react-icons/)

- [<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/nextjs.png" alt="nextjs"/> **Next.js 14**](https://nextjs.org/)

- [<img width="30" height="30" src="https://img.icons8.com/color/30/tailwindcss.png" alt="tailwindcss"/> **Tailwindcss**](https://tailwindcss.com/), [**shadcn UI**](https://ui.shadcn.com/) -for UI components- and [**Lucide**](https://lucide.dev/) -for icons-.

- [<img width="30" height="30" src="https://img.icons8.com/color/30/eslint.png" alt="eslint"/> **ESLint**](https://eslint.org/)

- [**Kinde**](https://kinde.com/) - auth for modern applications

- [**Supabase**](https://supabase.com/):  is an open source Firebase alternative. Start your project with a Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.

- [<img width="30" height="30" src="https://img.icons8.com/ios/30/prisma-orm.png" alt="prisma orm"/> **Prisma**](https://www.prisma.io/), Next-generation Node.js and TypeScript ORM. Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.

- [**world-countries**](https://mledoze.github.io/countries/), to have a list of countries

- [**React leaflet & Leaflet**](https://react-leaflet.js.org/), React components for Leaflet maps

- VSC extension recommended to use: Tailwind CSS IntelliSense

---
---

## <img width="30" height="30" src="https://img.icons8.com/nolan/30/todo-list.png" alt="todo-list"/> Prerequisites

- Node version 18.x. I used 20.4.1

---
---


### <img width="30" height="30" src="https://img.icons8.com/dusk/30/workstation.png" alt="workstation"/>  Getting Started

1. Cloning the repository: 

```BASH
git clone https://github.com/eugenia1984/airbnb-clone.git
```

And put inside the root folder

2. After cloning the GitHub repository and install all the dependencies with:

```BASH
npm install
#or
npm i
``` 

3. Setup ``.env`` file:

```
KINDE_CLIENT_ID=<your_kinde_client_id>
KINDE_CLIENT_SECRET=<your_kinde_client_secret>
KINDE_ISSUER_URL=https://<your_kinde_subdomain>.kinde.com

KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/api/auth/creation

DATABASE_URL="postgresql://johndoe:randompassword@localhost:6543/mydb?schema=public?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

# SUPERBASE
SUPABASE_URL=your-superbase-project-url-here
SUPABASE_ANON_KEY=your-superbase-project-api-key-here
```

4. Setup Prisma. Add MySQL Database :

- To generate the Prisma client, always after `npx prisma db push`command:
```BASH
npx prisma generate
```

- To start Prisma and create an schema:
```BASH
npx prisma init
``` 

- To update the database schema (when we make an update in the `schema.prisma` file):
```BASH
npx prisma db push
```

5. Start the app, running developer server:

```BASH
npm run dev
```

- <img width="30" height="30" src="https://img.icons8.com/color/30/command-line.png" alt="command-line"/>  Available commands: Running commands with:   `npm run [command]`

| command | description |
| ------- | ----------- |
| `dev` | starts a development instance of the app |


- <img width="30" height="30" src="https://img.icons8.com/color/30/command-line.png" alt="command-line"/>  Available commands: Running commands with:   `npx prisma [command]`

| command | description |
| ------- | ----------- |
| ` init` | initialize prisma |
| ` studio` | to see the data base |
| ` db push`| to update the schemas in the data base |


6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


---
---



## <img width="30" height="30" src="https://img.icons8.com/dusk/30/apple-notes.png" alt="apple-notes"/> Notes

I appreciate your interest in this Project ⌨️ with ❤️ by [María Eugenia Costa](https://github.com/eugenia1984) 😊 and follow me at [LinkedIn - maria-eugenia-costa](https://www.linkedin.com/in/maria-eugenia-costa/)

---

