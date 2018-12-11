import { Injectable } from "@angular/core";
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  IonicNativePlugin,
  cordovaWarn
} from "@ionic-native/core";

// @Plugin({
//   pluginName: "MathCalculator",
//   plugin: "cordova-plugin-mathcalculator",
//   pluginRef: "MathCalculator",
//   repo: "https://github.com/sandeep606/CalculatorPlugin.git",
//   platforms: ["Android", "ios"]
// })

@Plugin({
  pluginName: "MyNativeViewer",
  plugin: "cordova-plugin-mynativeviewer",
  pluginRef: "MyNativeViewer",
  repo: "https://github.com/sandeep606/TestingView.git",
  platforms: ["Android", "ios"]
})
@Injectable()
export class MathProvider {
  @Cordova()
  coolMethod(arg1: any): Promise<string> {
    return;
  }
}
