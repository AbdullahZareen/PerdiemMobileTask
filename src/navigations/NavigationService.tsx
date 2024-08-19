import { StackActions } from "@react-navigation/native";
import * as React from "react";
export const navigationRef = React.createRef<any>();

function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

function goBack() {
  navigationRef.current?.goBack();
}
function popNavigation(num: number) {
  navigationRef.current?.dispatch(StackActions.pop(num));
}
// The popToTop action takes you back to the first screen in the stack, dismissing all the others
function popToTop() {
  navigationRef.current.dispatch(StackActions.popToTop());
}
function replace(name: any) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: name }],
  });
}
function getCurrentRouteName() {
  return navigationRef.current.getCurrentRoute().name
}

export { navigate, goBack, replace, popToTop, getCurrentRouteName, popNavigation };
