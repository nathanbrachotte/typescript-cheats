---
layout: page
title: 'JavaScript'
---

### Basic JS code samples

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
