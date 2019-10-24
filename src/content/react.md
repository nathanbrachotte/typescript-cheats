---
layout: page
title: 'React'
---

Now we're writing in Markdown! Pretty nice, huh?

This starter has out-of-the-box support for basic Markdown rendering. The `content/` directory is where you put all of your Markdown content in. Gatsby will build your pages out of it. Gatsby will also follow the directory structure of your files too, so when you store a page at e.g. `content/projects/large-hadron-collider.md`, it will be built in `/projects/large-hadron-collider/`.
<span style="color:blue">some _blue_ text</span>.

and some `code`

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
