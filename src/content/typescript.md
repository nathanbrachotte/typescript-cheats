---
layout: page
title: 'Typescript'
---

### Basic TS code samples

<!-- ************************* -->
<!-- * [START] Define object with key/value * -->
<!-- ************************* -->
<details>
<summary>Define object with key/value</summary>

```typescript
interface MyObject {
  [key: string]: string | number
}
```

</details>
<!-- ************************* -->
<!-- * [END] Define object with key/value * -->
<!-- ************************* -->

<!-- ************************* -->
<!-- * [START] Timeouts * -->
<!-- ************************* -->
<details>
<summary>Timeouts</summary>

```typescript
let timer: ReturnType<typeof setTimeout> = setTimeout(() => { ... });
```

</details>
<!-- ************************* -->
<!-- * [END] Timeouts * -->
<!-- ************************* -->

<!-- ************************* -->
<!-- * [START] Asynchronous * -->
<!-- ************************* -->

### Asynchronous code

<details>
<summary>Promise</summary>

```typescript
async function myAsyncFunction(): Promise<string> {
  return 'Hi!'
}

const resultWithAwait = await myAsyncFunction()
myAsyncFunction().then(resultWithChaining => {})
// highlight-next-line
// resultWithAwait and resultWithChaining implicit type is String
```

</details>
<!-- ************************* -->
<!-- * [END] Asynchronous * -->
<!-- ************************* -->
