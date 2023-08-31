import { createApp } from 'vue';
import App from "./src/App";

createApp(App).mount('#app')

// document.getElementById("lorem").onsubmit = async (event) => {
//   event.preventDefault()
//   const el = await webflow.getSelectedElement();
//   if (el && el.children) {
//     el.setTextContent(
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
//         "eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     )
//     el.save()
//   }
// }
