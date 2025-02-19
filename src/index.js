// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import "react-app-polyfill/ie11"; // required for IE11
import "react-app-polyfill/stable"; // required for IE11
import React, { Suspense, lazy } from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PageNavigationListener from "./utils/PageNavigationListener.utils";
import "./index.css";
import { BLOG_LINK } from "./utils/Constants.utils";

// const CV = lazy(() => import("./pages/CV"));
// const NotFound = lazy(() => import("./pages/NotFound"));

const APP = (
  <BrowserRouter>
    <PageNavigationListener />
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path={BLOG_LINK} component={Blog} /> */}
      {/* <Route
        exact
        path={`${BLOG_LINK}:blogPostFileName`}
        component={BlogPost}
      /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* <Route exact path="/cv" component={CV} />
          <Route exact path="/404" component={NotFound} /> */}
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </Switch>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

const prefersColorSchemeWatcher = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

prefersColorSchemeWatcher.addEventListener("change", () => {
  const favicon = document.querySelector('link[rel="icon"]');
  favicon.href = null;
  favicon.href = "/favicon.svg";
});
