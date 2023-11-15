#  <img width="40" height="40" src="https://img.icons8.com/color/40/trello.png" alt="trello"/> Full Stack Trello clone Wiki!

This is a project in [Next.js](https://nextjs.org/) with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), creating a **Trello** clone.


---

## Demo 📦

📌 (bulding...)

---

## Features 📢


✔️ TailwindCSS and shadcnUI design. Tailwind animations and effects.

✔️ Full responsiveness

✔️ Landing page

✔️ Auth

✔️ Organizations / Workspaces

✔️ Board creation

✔️ Unsplash API for random beautiful cover images

✔️ Activity log for entire organization

✔️ Board rename and delete

✔️ List creation. List rename, delete, drag & drop reorder and copy

✔️ Card creation. Card description, rename, delete, drag & drop reorder and copy. Card activity log

✔️ Board limit for every organization

✔️ Stripe subscription for each organization to unlock unlimited boards

✔️ MySQL DB

✔️ Prisma ORM


---

## Technologies 🛠️


- [<img width="30" height="30" src="https://img.icons8.com/plasticine/30/react.png" alt="react"/> **React**](https://react.dev/), [**React-DOM**](https://www.npmjs.com/package/react-dom) and  [**React icons**](https://react-icons.github.io/react-icons/)

- [<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/nextjs.png" alt="nextjs"/> **Next.js 14**](https://nextjs.org/)

- [<img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="mongodb"/> **MongoDB Atlas**](https://www.mongodb.com/atlas/database)

- [<img width="30" height="30" src="https://img.icons8.com/color/30/tailwindcss.png" alt="tailwindcss"/> **Tailwindcss**](https://tailwindcss.com/) and [**shadcn UI**](https://ui.shadcn.com/)

- [**Prisma**](https://www.prisma.io/)

- [**Bcrypt**](https://www.npmjs.com/package/bcrypt) and add `npm install -D @types/bcrypt` to add types

- [<img width="30" height="30" src="https://img.icons8.com/color/30/eslint.png" alt="eslint"/> **ESLint**](https://eslint.org/)

- [**axios**](https://axios-http.com/docs/intro)

- VSC extension recommended to use: Tailwind CSS IntelliSense

---
---

## <img width="30" height="30" src="https://img.icons8.com/nolan/30/todo-list.png" alt="todo-list"/> Prerequisites

- Node version 18.x. I used 20.0.0

---
---


### <img width="30" height="30" src="https://img.icons8.com/dusk/30/workstation.png" alt="workstation"/>  Getting Started

1. Cloning the repository: 
```BASH
git clone https://github.com/eugenia1984/trello-clone.git
```

And put inside the root folder

2. After clonining the GitHub repository and install all the dependencies with:

```BASH
npm install
#or
npm i
``` 

3. Setup ``.env`` file:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=

STRIPE_API_KEY=

NEXT_PUBLIC_APP_URL=

STRIPE_WEBHOOK_SECRET=
```

4. Setup Prisma. Add MySQL Database (I used PlanetScale):

```BASH
npx prisma generate
npx prisma db push
```

5. Start the app, running developer server:

```BASH
npm run dev
```

- Available commands: Running commands with npm npm run [command]

| command | description |
| ------- | ----------- |
| `dev` | starts a development instance of the app |

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

7. This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

---
---

### <img width="30" height="30" src="https://img.icons8.com/color/30/command-line.png" alt="command-line"/> Commands

- To run the Next application

```BASH
npm run dev
``` 

- To start Prisma and create an schema

```BASH
npx prisma init
``` 

Next steps:

1. Set the DATABASE_URL in the **.env** file to point to your existing database. If your database has no tables yet, read [https://pris.ly/d/getting-started](https://pris.ly/d/getting-started)

2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.

In my case is a **mongoDB atlas**, and after all the schemma run: `npm prisma db push`

3. Run prisma db pull to turn your database schema into a Prisma schema.

4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

More information in our documentation: [https://pris.ly/d/getting-started](https://pris.ly/d/getting-started)


---
---

#### <img width="30" height="30" src="https://img.icons8.com/color/30/book.png" alt="book"/> Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

---

#### Deploy on Vercel

The easiest way to deploy your **Next.js** app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---



## <img width="30" height="30" src="https://img.icons8.com/dusk/30/apple-notes.png" alt="apple-notes"/> Notes

I appreciate your interest in this Project ⌨️ with ❤️ by [María Eugenia Costa](https://github.com/eugenia1984) 😊 and follow me at [LinkedIn - maria-eugenia-costa](https://www.linkedin.com/in/maria-eugenia-costa/)

---

