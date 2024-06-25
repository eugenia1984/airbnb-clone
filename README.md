#  Full Stack Airbnb clone!

This is a project in [Next.js](https://nextjs.org/) with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), creating an **Airbnb** clone.


---

## Demo 📦

📌 (bulding...)

---

## Features 📢


✔️ TailwindCSS and shadcnUI design. Tailwind animations and effects.

✔️ Full responsiveness

✔️ Landing page


---

## Technologies 🛠️


- [<img width="30" height="30" src="https://img.icons8.com/plasticine/30/react.png" alt="react"/> **React**](https://react.dev/), [**React-DOM**](https://www.npmjs.com/package/react-dom) and  [**React icons**](https://react-icons.github.io/react-icons/)

- [<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/nextjs.png" alt="nextjs"/> **Next.js 14**](https://nextjs.org/)

- [<img width="30" height="30" src="https://img.icons8.com/color/30/tailwindcss.png" alt="tailwindcss"/> **Tailwindcss**](https://tailwindcss.com/), [**shadcn UI**](https://ui.shadcn.com/) -for UI components- and [**Lucide**](https://lucide.dev/) -or icons-.

- [<img width="30" height="30" src="https://img.icons8.com/color/30/eslint.png" alt="eslint"/> **ESLint**](https://eslint.org/)

- [**Kinde**](https://kinde.com/) - auth for modern applications

- [<img width="30" height="30" src="https://img.icons8.com/ios/30/prisma-orm.png" alt="prisma orm"/> **Prisma**](https://www.prisma.io/), Next-generation Node.js and TypeScript ORM. Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.


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
| `npm run dev` | starts a development instance of the app |

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



## <img width="30" height="30" src="https://img.icons8.com/dusk/30/apple-notes.png" alt="apple-notes"/> Notes

I appreciate your interest in this Project ⌨️ with ❤️ by [María Eugenia Costa](https://github.com/eugenia1984) 😊 and follow me at [LinkedIn - maria-eugenia-costa](https://www.linkedin.com/in/maria-eugenia-costa/)

---

