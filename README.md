# React-Smart

## 简介
一套基于ReactNative的快速开发组件库.
## 特性
- 路由
  - Actions
  - Router
  - Scene
- 浮动层
  - Toast
  - Spin
  - SpinProgress
  - Dialog
  - ActionSheet
  - Popup
- ui组件
  - TopBar
  - ProgressCircle
  - Button
  - CheckBox
  - Switch
  - NumberInput
  - TouchableView
  - LockPattern
  - RowGroup
- 动态主题
  - Theme
- 其他
  - Http


#### Android工程调整
`TopBar`组件在Android中有沉浸(默认)和染色两种状态栏模式,在Android4.4以后版本才能正常使用沉浸样式,若要兼容4.4及更更低版本,请设置TopBar模式为染色模式,或在中`MainActivity`中复写`createReactActivityDelegate`方法
```java
    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                Bundle bundle = new Bundle();
                bundle.putInt("Android_SDK_INT", Build.VERSION.SDK_INT);
                return bundle;
            }
        };
    }
```