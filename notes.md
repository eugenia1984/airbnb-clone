# <img width="42" height="42" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/42/external-note-pad-user-interface-flatart-icons-flat-flatarticons.png" alt="note pad"/> NOTES

## <img width="38" height="38" src="https://img.icons8.com/fluency/38/folder-invoices--v2.png" alt="folder"/> Directory structure

```
> app
  > (test)
    > other
      page.tsx -> '/other'
    > something
      > page.tsx -> '/something'
    layout.tsx
    page.tsx -> not in the URL
  > example 
    page.tsx -> '/example'
  > users
    > [id] 
      page.tsx -> '/users/{id}'
layout.tsx
page.tsx -> '/'
```

- Layout englobe the page.tsx root.

- Using `[]` we can use params in the URL. By default the pages are **Server side rendering** so we can use `params` to read the URL param. We just need to call the params as we use between `[]`, example: `[id]` -> `params.id`

- Every folder inside 'app' will be part of the URL route. If we name the folder between `()` we are not going to included it in the URL route, it can be use in reusable layout too the `()`. The `()` are useful to order inside a folder, for example if we need a different layout for specific route. We can se the example for: `/something` or `/other`, without `test`before `/`.

- Every time we use `Layout` we need to use `children` (`React.ReactNode`) to be able to display another page or component inside the layout, so we will have layouts for specific routes. Example:

```TSX
const TestLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>{children}</div>
  )
}

export default TestLayout;
```

```
> app
  > (test)
  > other
  > something
  layout.tsx
```

---

## <img width="32" height="32" src="https://img.icons8.com/papercut/32/api.png" alt="api"/> API

- **API** no need to use the API folder anymore. We use the `.ts` extension because it's not a functional component or a page (no use `.tsx`)

```
> app
  > users
    route.ts
```

A simple example:

```TypeScript
import { NextResponse } from 'next/server'

export function GET() { 
  return NextResponse.json({
    hello: "hello"
  })
}
```

It's a **route handler** so inside we can have GET; POST, PUT, etc. We do not use export **default**, we can have more than one function.

At: `http://localhost:3000/users`we can see:

```JSON
{
  "hello": "hello"
}
```

---


## <img width="42" height="42" src="https://img.icons8.com/fluency/42/server--v1.png" alt="server"/> Server components

- By default every **page** inside `/app` is a **Server component**.

- A server component can access to the **params** with no need of a prop.

Example:

```JSX
const IdPage = ({
  params
}: {
  params: { id: string }
}) => {
  return (
    <div>Id: {params.id} Page</div>
  )
}

export default IdPage;
```

```
> app
  > users
    > [id]
      page.tsx
```

---

## Components


To be completed excluded on the router, we use the `_`

```
> _components
```

---

## <img width="42" height="42" src="https://img.icons8.com/fluency/42/database--v1.png" alt="database--v1"/> DATA BASE

### Prisma

- To install:

```BASH
npm i -D prisma
```

- To inicialize:

```BASH
npx prisma init
```

Now we have a **prisma** folder with a **schema.prisma** file inside. And inside the ***.env** we have a mock DATABASE_URL, that will be replace we our data base (Planet Scale)

- Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started

2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.

3. Run prisma db pull to turn your database schema into a Prisma schema. `npx prisma db push`, to have it sincronized with PlanetScale

4. Run prisma generate to generate the Prisma Client. You can then start querying your database: `npx prisma generate`, to have it available in node-modules


`npm install @prisma/client`, so we can use Prisma in our application

5. `npx prisma studio` y se nos abre el `http://localhost:5555/` con Prisma Studio

---