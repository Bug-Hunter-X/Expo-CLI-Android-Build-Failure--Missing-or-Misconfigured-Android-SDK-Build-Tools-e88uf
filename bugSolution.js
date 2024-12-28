The most common solution to this problem is to explicitly specify the Android SDK Build Tools version in the `android/gradle.properties` file within your project.  The Expo CLI might not correctly detect or manage this version.  Adding the following lines to `android/gradle.properties` can solve this issue:
```
android.useAndroidX=true
android.enableJetifier=true
buildToolsVersion=30.0.3 // Or another compatible version
```
Remember to replace `30.0.3` with a version that is compatible with your project's requirements.  You can check for compatible versions within your Android SDK installation. After adding this to `gradle.properties` run `expo prebuild` followed by `expo build:android` again.