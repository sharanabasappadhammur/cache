import React, { useEffect } from "react";
// import { useMetaTags } from "./UseMetaTags";
// import { Helmet } from "react-helmet";

const App = () => {
  // useEffect(() => {
  //   useMetaTags({
  //     title: "Your Website Title",
  //     description: "A brief description of your website",
  //     image:
  //       "https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png",
  //     url: "https://silly-sunburst-8de3f8.netlify.app/"
  //   });
  // }, []);

  useEffect(() => {
    // Create and append the og:image meta tag
    const ogImageTag = document.createElement("meta");
    ogImageTag.setAttribute("property", "og:image");
    ogImageTag.content =
      "https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png"; // Replace with dynamic image URL
    document.head.appendChild(ogImageTag);

    // Create and append the og:url meta tag
    const ogUrlTag = document.createElement("meta");
    ogUrlTag.setAttribute("property", "og:url");
    ogUrlTag.content = "https://silly-sunburst-8de3f8.netlify.app"; // Replace with dynamic page URL
    document.head.appendChild(ogUrlTag);

    // Cleanup: Remove the meta tags when the component unmounts
    return () => {
      document.head.removeChild(ogImageTag);
      document.head.removeChild(ogUrlTag);
    };
  }, []); // Empty dependency array means this will run only once when the component mounts

  return (
    <div>
      {/* <Helmet>
        <meta property="og:title" content={"Loading..."} />
        <meta property="og:description" content={"Loading..."} />
        <meta property="og:image" content={"/default-image.jpg"} />
        <meta
          property="og:url"
          content="https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png"
        />
        <meta property="og:type" content="article" />
        <title>{"news.title"}</title>
      </Helmet> */}
      <h1>Welcome to Your Website2222</h1>
      <p>Some content goes here...</p>
    </div>
  );
};

export default App;
