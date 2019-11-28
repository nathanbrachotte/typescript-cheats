---
layout: page
title: 'React'
---

Now we're writing in Markdown! Pretty nice, huh?

This starter has out-of-the-box support for basic Markdown rendering. The `content/` directory is where you put all of your Markdown content in. Gatsby will build your pages out of it. Gatsby will also follow the directory structure of your files too, so when you store a page at e.g. `content/projects/large-hadron-collider.md`, it will be built in `/projects/large-hadron-collider/`.
<span style="color:blue">some _blue_ text</span>.

```typescript
class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end
   render() {
    return (
      { /* highlight-range{1,4-9,12} */ }
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

That would [fix the problem](https://codesandbox.io/s/0x0mnlyq8l) but our interval would be cleared and set again whenever the `count` changes. That may be undesirable:

![Diagram of interval that re-subscribes](./interval-rightish.gif)

_(Dependencies are different, so we re-run the effect.)_

---

**The second strategy is to change our effect code so that it wouldn’t _need_ a value that changes more often than we want.** We don’t want to lie about the dependencies — we just want to change our effect to have _fewer_ of them.

Let’s look at a few common techniques for removing dependencies.

---

## Making Effects Self-Sufficient

We want to get rid of the `count` dependency in our effect.

```jsx{3,6}
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1)
  }, 1000)
  return () => clearInterval(id)
}, [count])
```

To do this, we need to ask ourselves: **what are we using `count` for?** It seems like we only use it for the `setCount` call. In that case, we don’t actually need `count` in the scope at all. When we want to update state based on the previous state, we can use the [functional updater form](https://reactjs.org/docs/hooks-reference.html#functional-updates) of `setState`:

```jsx{3}
useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1)
  }, 1000)
  return () => clearInterval(id)
}, [])
```

```typescript
interface Props {
  isBolean: boolean
}

class FlavorForm extends React.Component<Props> {
  // highlight-line

  render() {
    return null
  }
}
```

[That's cool! Okay, take me back home.](/)
