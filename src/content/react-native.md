---
layout: page
title: 'React Native'
---

### reanimated (react-native-reanimated)

<!-- ************************* -->
<!-- * [START] Type Animated Style * -->
<!-- ************************* -->
<details>
<summary>Type reanimated ViewStyle</summary>

```typescript
import { ViewStyle, ViewProps } from 'react-native'
import Animated from 'react-native-reanimated'

// Apply to a <Animated.View/> component
type AnimatedViewStyle = ViewStyle & Animated.AnimateProps<ViewStyle, ViewProps>
```

</details>
<!-- ************************* -->
<!-- * [END] Type Animated Style * -->
<!-- ************************* -->
