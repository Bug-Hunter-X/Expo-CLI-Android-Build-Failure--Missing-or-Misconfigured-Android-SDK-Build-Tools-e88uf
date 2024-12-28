# Expo CLI Android Build Failure: Missing or Misconfigured Android SDK Build Tools

This repository demonstrates a bug in the Expo CLI where the Android build process fails due to missing or misconfigured Android SDK build tools.  The issue occurs even when the Android SDK is correctly installed and environment variables are properly set.  The error message from the Expo CLI is inconsistent, but it generally indicates that a specific version of the build tools is not found.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `expo prebuild`
4. Run `expo build:android`

## Expected Behavior

The Android build process should complete successfully, producing an APK file.

## Actual Behavior

The build process fails with an error message indicating that the Android SDK build tools are missing or incorrectly configured.

## Solution

The solution may involve updating or reinstalling the Android SDK components or resolving inconsistencies within the Android SDK's configuration. The specific solution may vary depending on the error messages and the user's environment. Please refer to the `bugSolution.js` file for a potential fix involving explicitly setting the build tools version in the `android/gradle.properties` file.

## Workarounds

* Manually specifying Android SDK Build-Tools version in your project's `android/gradle.properties` file
* Reinstalling Android SDK components and ensuring their correctness