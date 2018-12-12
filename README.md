# React-Smart

## 简介
一套基于ReactNative的快速开发组件库.
### 使用
`yarn add react-smart`  
或  
`npm install react-smart --save`  
## 特性
- 路由
  - Actions
  - Router
  - Scene
- 浮动层
  - Toast 轻提示
  - Spin 页面加载
  - SpinProgress 页面进度加载
  - Dialog 对话框
  - ActionSheet 弹出选择
  - Popup
- ui组件
  - TopBar 标题栏
  - ProgressCircle 圆形加载
  - GridView 可拖拽网格布局
  - Button 按钮
  - CheckBox 复选框
  - Switch 开关
  - TouchableView 点击组件
  - LockPattern 手势解锁
  - RowGroup
  - ActivityIndicator 活动指示器
  - NumberInput 计数组件
  - Slider 滑块
  - PopTip 气泡提示
- 动态主题
  - Theme
- 其他
  - Http

## 效果预览
### Theme
![Theme](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/theme.gif)
### Toast 轻提示
![Toast](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/toast.gif)
### Spin/SpinProgress 页面加载
![SpinProgress](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/progress_dialog.gif)
### Dialog 对话框
![Dialog](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/dialog.gif)
### ActionSheet 弹出选择
![ActionSheet](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/action_sheet.gif)
### TopBar 标题栏
![TopBar](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/topbar.gif)
### ProgressCircle 圆形加载
![ProgressCircle](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/progress_circle.gif)
### GridView 可拖拽网格布局
![GridView](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/grid_view.gif)
### CheckBox 复选框
![CheckBox](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/checkbox.png)
### Switch 开关
![Switch](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/switch.gif)
### TouchableView 点击组件
![TouchableView](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/touchableview.gif)
### LockPattern 手势解锁
![LockPattern](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/lock_pattern.gif)

### ActivityIndicator 活动指示器
![ActivityIndicator](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/ActivityIndicator.gif)

### NumberInput 计数组件
![NumberInput](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/NumberInput.gif)
### Slider 滑块
![Slider](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/Slider.gif)
### PopTip 气泡提示
![PopTip](https://gitee.com/NightFarmer/react-smart/raw/master/screenshot/PopTip.gif)

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
