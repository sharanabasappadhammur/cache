import React from "react";
import useMetaTags from "./UseMetaTags";
import { Helmet } from "react-helmet";

const App = () => {
  // useMetaTags({
  //   title: "Your Website Title",
  //   description: "A brief description of your website",
  //   image:
  //     "https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png",
  //   url: "https://silly-sunburst-8de3f8.netlify.app/"
  // });

  return (
    <div>
      <Helmet>
        <meta property="og:title" content={"Loading..."} />
        <meta property="og:description" content={"Loading..."} />
        <meta property="og:image" content={"/default-image.jpg"} />
        <meta
          property="og:url"
          content="https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png"
        />
        <meta property="og:type" content="article" />
        <title>{"news.title"}</title>
      </Helmet>
      <h1>Welcome to Your Website...............</h1>
      <p>Some content goes here...</p>
    </div>
  );
};

export default App;
