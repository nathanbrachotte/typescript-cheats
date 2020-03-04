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
// or
interface MyObject = Record<string, string | number>
```

</details>
<!-- ************************* -->
<!-- * [END] Define object with key/value * -->
<!-- ************************* -->

<!-- ************************* -->
<!-- * [START] Timeouts/Intervals * -->
<!-- ************************* -->
<details>
<summary>Timeouts/Intervals</summary>

```typescript
const timer: ReturnType<typeof setTimeout> = setTimeout(() => { ... })
const interval: ReturnType<typeof setInterval> = setInterval(() => { ... })
```

</details>
<!-- ************************* -->
<!-- * [END] Timeouts * -->
<!-- ************************* -->

<!-- ************************* -->
<!-- * [START] Extend type without some fields (Omit) * -->
<!-- ************************* -->
<details>
<summary>Extend type without some fields (Omit)</summary>

```typescript
interface MainComponentProps {
  wantThat: boolean
  notThat: boolean
}

interface SubComponentProps extends Omit<MainComponentProps, 'notThat'> {
  specificToSubComponent: string
}
// accessing SubComponentProps.wantThat will work, SubComponentProps.notThat will throw
```

</details>
<!-- ************************* -->
<!-- * [END] Extend type without some fields (Omit) * -->
<!-- ************************* -->

<!-- ************************* -->
<!-- * [START] Readonly / Immutable object values * -->
<!-- ************************* -->
<details>
<summary>Readonly / Immutable object values</summary>

```typescript
const params = { val: 'hello' } // type string, TS would accept value changes
const params = { val: 'hello' } as const // type "hello", TS throws if you try to update val
```

</details>
<!-- ************************* -->
<!-- * [END] Readonly / Immutable object values * -->
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
