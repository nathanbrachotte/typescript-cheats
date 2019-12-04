---
layout: page
title: 'React'
---

### Class

<!-- [START] DECLARE CLASS -->
<details>
<summary>Declare class</summary>

```typescript
interface OwnProps {
  // props coming from parent
}

interface ReduxProps {
  // props coming from mapStateToProps
}

interface State {
  // state values
}

type Props = OwnProps & ReduxProps

// highlight-next-line
class MyScreen extends PureComponent<Props, State> {
  state: State = {
    // Your initial state here
  }
  // Your class content here
}

const mapStateToProps = (state: StoreState): ReduxProps => ({
  // Your redux values
})

export default connect(mapStateToProps)(MyScreen)
```

</details>
<!-- [END] DECLARE CLASS -->

### Functional Component
