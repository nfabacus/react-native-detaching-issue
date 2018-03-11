# issue of detaching Expo app to ExpoKit

This project was bootstrapped with Create React Native App, then detached from Expo to ExpoKit.

## Here is the forum thread of my issue.
https://forums.expo.io/t/correct-way-to-publish-detached-app/2052/14?u=nfabacus

## Issue: after detaching, newly-linked libraries cannot be used
Please read the thread in the forum above.
error:
```
[Unhandled promise rejection: TypeError: undefined is not an object (evaluating '_reactNativeHtmlToPdf2.default.convert')]
* null:null in createPDF$
- node_modules\regenerator-runtime\runtime.js:62:44 in tryCatch
- node_modules\regenerator-runtime\runtime.js:296:30 in invoke
- node_modules\regenerator-runtime\runtime.js:114:28 in <unknown>
- node_modules\regenerator-runtime\runtime.js:62:44 in tryCatch
- node_modules\regenerator-runtime\runtime.js:152:28 in invoke
- node_modules\regenerator-runtime\runtime.js:195:17 in <unknown>
- node_modules\promise\setimmediate\core.js:45:7 in tryCallTwo
- node_modules\promise\setimmediate\core.js:200:23 in doResolve
- node_modules\promise\setimmediate\core.js:66:12 in Promise
- node_modules\regenerator-runtime\runtime.js:194:27 in callInvokeWithMethodAndArg
- node_modules\regenerator-runtime\runtime.js:217:12 in enqueue
- node_modules\regenerator-runtime\runtime.js:114:28 in <unknown>
- node_modules\regenerator-runtime\runtime.js:241:8 in async
* null:null in createPDF
- node_modules\react-proxy\modules\createPrototypeProxy.js:44:35 in proxiedMethod
- node_modules\react-native\Libraries\Components\Touchable\TouchableHighlight.js:240:45 in touchableHandlePress
- node_modules\react-native\Libraries\Components\Touchable\Touchable.js:746:34 in _performSideEffectsForTransition
- node_modules\react-native\Libraries\Components\Touchable\Touchable.js:664:44 in _receiveSignal
- node_modules\react-native\Libraries\Components\Touchable\Touchable.js:433:24 in touchableHandleResponderRelease
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:134:15 in _invokeGuardedCallback
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:67:32 in invokeGuardedCallback
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:91:48 in invokeGuardedCallbackAndCatchFirstError
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:579:4 in executeDispatch
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:610:20 in executeDispatchesInOrder
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:768:29 in executeDispatchesAndRelease
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:779:37 in executeDispatchesAndReleaseTopLevel
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:747:16 in forEachAccumulated
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:948:6 in processEventQueue
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:2538:20 in runEventQueueInBatch
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:2557:23 in handleTopLevel
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:2671:19 in <unknown>
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:11543:16 in batchedUpdates
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:2517:31 in batchedUpdates
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:2670:17 in _receiveRootNodeIDEvent
- node_modules\react-native\Libraries\Renderer\ReactNativeRenderer-dev.js:2741:28 in receiveTouches
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:353:47 in __callFunction
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:118:26 in <unknown>
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:316:6 in __guardSafe
- node_modules\react-native\Libraries\BatchedBridge\MessageQueue.js:117:17 in callFunctionReturnFlushedQueue
```