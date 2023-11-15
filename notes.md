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

- Layout englobal the page.tsx root.

- Using '[]' we can use params in the URL. By default the pages are **Server side rendering** so we can use `params` to read the URL param. We just need to call the params as we use between `[]`, example: `[id]` -> `params.id`

- Every folder inside 'app' will be part of the URL route. If we name the folder between `()` we are not going to included it in the UTL route, it can be use in reusable layout too the `()`. The `()` are usefull to order inside a folder, for example if we need a different layout for specific route.

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

## Components


To be completed excluded on the router, we use the `_`

```
> _components
```