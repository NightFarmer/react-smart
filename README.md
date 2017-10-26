# rs

## Android工程调整
MainActivity加上
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