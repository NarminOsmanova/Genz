import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../src/assets/sass/style.css";
import configureStore from "../src/manager/store/configureStore";
// import { addBlog, removeBlog } from "./manager/actions/blogAction";
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from "./manager/actions/blogAction";

// const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(removeBlog({ id: blog1.myblog.id }));
// store.dispatch(
//   addBlog({
//     title: "Five places must visit in Turkey to relax in the winter season",
//     desc: "#Business #Food #Interior",
//     photo:
//       "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg",
//     date: "Feb 12, 2023",
//     name: "William",
//     img: "https://advanture.icu/zenai/wp-content/uploads/sites/11/2023/02/bearded-smiling-system-administrator-is-working-wi-2022-01-18-23-57-33-utc-173.jpg",
//   })
// );
// // store.dispatch(
// //   editBlog(blog2.myblog.id, { title: "ghj", desc: "ghjkl", photo: "ghjkl" })
// // );
// store.dispatch(
//   addBlog({
//     title: "Your Light Is About To Stop Being Relevant",
//     desc: "#Animal #Lifestyle #Travel",
//     photo:
//       "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg",
//     date: "Feb 12, 2023",
//     name: "William",
//     img: "https://advanture.icu/zenai/wp-content/uploads/sites/11/2023/02/bearded-smiling-system-administrator-is-working-wi-2022-01-18-23-57-33-utc-173.jpg",
//   })
// );
// store.dispatch(
//   addBlog({
//     title: "Master The Art Of Nature With These 7 Tips",
//     desc: "#Animal #Business #Culture",
//     photo:
//       "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg",
//     date: "Feb 12, 2023",
//     name: "William",
//     img: "https://advanture.icu/zenai/wp-content/uploads/sites/11/2023/02/bearded-smiling-system-administrator-is-working-wi-2022-01-18-23-57-33-utc-173.jpg",
//   })
// );
// store.dispatch(
//   addBlog({
//     title: "Unique architectural design but not lacking",
//     desc: "#Animal #Culture #Interior",
//     photo:
//       "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg",
//     date: "Feb 12, 2023",
//     name: "William",
//     img: "https://advanture.icu/zenai/wp-content/uploads/sites/11/2023/02/bearded-smiling-system-administrator-is-working-wi-2022-01-18-23-57-33-utc-173.jpg",
//   })
// );
// store.dispatch(
//   addBlog({
//     title: "Self-observation is the first step of inner...",
//     desc: "#Lifestyle #Travel",
//     photo:
//       "https://jthemes.net/themes/wp/genz/wp-content/uploads/2023/02/news2.jpg",
//     date: "Feb 12, 2023",
//     name: "William",
//     img: "https://advanture.icu/zenai/wp-content/uploads/sites/11/2023/02/bearded-smiling-system-administrator-is-working-wi-2022-01-18-23-57-33-utc-173.jpg",
//   })
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
const store = configureStore();

const result = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(getBlogsFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root"));
});
