import { createApp } from "vue";

type Composable = () => any;

export function withSetup(composable: Composable) {
  let result: any;
  const app = createApp({
    setup() {
      result = composable();
      // suppress missing template warning
      return () => {};
    },
  });
  app.mount(document.createElement("div"));
  // return the result and the app instance
  // for testing provide / unmount
  return [result, app];
}
