---
layout: page
title: 'React'
---

### Class

<!-- ************************* -->
<!-- * [START] DECLARE CLASS * -->
<!-- ************************* -->
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
class MyComponent extends PureComponent<Props, State> {
  state: State = {
    // Your initial state here
  }
  // Your class content here
}

const mapStateToProps = (state: StoreState): ReduxProps => ({
  // Your redux values
})

export default connect(mapStateToProps)(MyComponent)
```

</details>
<!-- ************************* -->
<!-- * [END] DECLARE CLASS * -->
<!-- ************************* -->

<!-- ************************* -->
<!-- * [START] REDUX * -->
<!-- ************************* -->
<details>
<summary>Redux reducer & action</summary>

```typescript
/**
 * Example for a user reducer
 */

const UPDATE_USER = 'UPDATE_USER'
const CREATE_USER = 'CREATE_USER'

// highlight-start
export interface UserState {
  email: string | null
  firstName: string | null
  lastName: string | null
}
// highlight-end

// highlight-start
const INITIAL_STATE: UserState = {
  email: null,
  firstName: null,
  lastName: null
}
// highlight-end

// highlight-next-line
export default function(state = INITIAL_STATE, action: UserActionTypes): UserState {
  switch (action.type) {
    case CREATE_USER: {
      return { ...state, ...action.payload }
    }
    case UPDATE_USER: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

// Everything below can be separated in an userAction.ts file for readability
// highlight-start
interface CreateUserAction {
  type: typeof CREATE_USER
  payload: UserState
}
// highlight-end

// highlight-start
export const createUser = (payload: CreateUserAction['payload']): CreateUserAction => ({
  type: CREATE_USER,
  payload
})
// highlight-end

interface UpdateUserAction {
  type: typeof UPDATE_USER
  payload: {
    email?: string
    firstName?: string
    leftName?: string
  }
}

export const updateUser = (payload: UpdateUserAction['payload']): UpdateUserAction => ({
  type: UPDATE_USER,
  payload
})

// highlight-next-line
type UserActionTypes = UpdateUserAction | CreateUserAction
```

</details>
<!-- ************************* -->
<!-- * [END] REDUX * -->
<!-- ************************* -->
