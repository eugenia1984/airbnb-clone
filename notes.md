# NOTES

##  Directory structure

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

- Using '[]' we can use params in the URL. By default the pages are **Server side rendering** so we can use `params` to read the URL param. We just need to call the params as we use between `[]`, example: `[id]` -> `params.id`

- Every folder inside 'app' will be part of the URL route. If we name the folder between `()` we are not going to included it in the URL route, it can be use in reusable layout too the `()`. The `()` are useful to order inside a folder, for example if we need a different layout for specific route. We can se the example for: `/something`, without `test`before `/`.

- Every time we use `Layout` we need to use `children` (`React.ReactNode`) to be able to display another page or component inside the layout, so we will have layouts for specific routes

---

## API

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

It's a **route handler** so inside we can have GET; POST, PUT, etc. We do not use export **default**.

---


## Server components

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

## LogIn and Sign In with Clerk


If there is a server component:

```TypeScript
import { auth, currentUser } from '@clerk/nextjs'

const ProtectedPage = async () => {

  const user = await currentUser()
  const { userId } = auth()

  return (
    <div>
      User: { user?.firstName } { user?.lastName }
      UserID: { userId }
    </div>
  )
}

export default ProtectedPage
```

If there is  client component:

```TypeScript
'use client'

import { useAuth, useUser } from '@clerk/nextjs'

const ProtectedPage = () => {

  const { userId } = useAuth()
  const { user } = useUser()

  return (
    <div>
      UserId: { userId }
      User: { user?.fullName }
    </div>
  )
}

export default ProtectedPage
```

---

## DATA BASE

### Prisma

- To install:

```BASH
npm i -D prisma
```

- To iniziacizing:

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