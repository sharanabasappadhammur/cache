// import React, { useEffect } from "react";
// import useMetaTags from "./UseMetaTags";
// import { Helmet } from "react-helmet";

// const App = () => {
//   // useEffect(() => {
//   //   useMetaTags({
//   //     title: "Your Website Title",
//   //     description: "A brief description of your website",
//   //     image:
//   //       "https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png",
//   //     url: "https://silly-sunburst-8de3f8.netlify.app/"
//   //   });
//   // }, []);

//   const imageUrl =
//     "https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png";

//   const url = "https://silly-sunburst-8de3f8.netlify.app/";

//   return (
//     <div>
//       {/* <Helmet>
//         <meta property="og:title" content={"Loading..."} />
//         <meta property="og:description" content={"Loading..."} />
//         <meta property="og:image" content={"/default-image.jpg"} />
//         <meta
//           property="og:url"
//           content="https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png"
//         />
//         <meta property="og:type" content="article" />
//         <title>{"news.title"}</title>
//       </Helmet> */}

//       {/* Open Graph Meta Tags */}
//       {/* <Helmet>
//         <meta property="og:title" content={"title"} />
//         <meta property="og:description" content={"description"} />
//         <meta property="og:image" content={imageUrl} />
//         <meta property="og:url" content={url} />
//         <meta property="og:type" content="article" />
//       </Helmet> */}
//       <Router>
//         <Routes>
//           <Route path="/" element={<NewsFeed />} />
//           <Route path="/news/:id" element={<NewsReadMore />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  // Routes,
  useParams
} from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const newsList = [
  {
    id: 1,
    title: "News 1",
    description: "Description 1",
    imageUrl:
      "https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png"
  },
  {
    id: 2,
    title: "News 2",
    description: "Description 2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
  }
];

const NewsFeed = () => {
  // Fetch and display a list of news articles

  return (
    <div>
      {newsList.map((news) => (
        <div key={news.id}>
          <h2>{news.title}</h2>
          <a href={`/news${news.id}`}>Read More</a>
        </div>
      ))}
    </div>
  );
};

const NewsReadMore1 = () => {
  const { id } = useParams(); // Get the news ID from the URL
  const news = {
    id: 1,
    title: "News 1",
    description: "Description 1",
    imageUrl:
      "https://coffeeweb.s3.ap-south-1.amazonaws.com/coffeenewsfeeds/Uptrend.png"
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.description} />
        <meta property="og:image" content={news.imageUrl} />
        <meta
          property="og:url"
          content={`https://majestic-blancmange-b8082b.netlify.app/news${news.id}`}
        />
      </Helmet>

      <div>
        <h1>{news.title}</h1>
        <img src={news.imageUrl} alt={news.title} />
        <p>{news.description}</p>
      </div>
    </>
  );
};
const NewsReadMore2 = () => {
  const { id } = useParams(); // Get the news ID from the URL
  const news = {
    id: 2,
    title: "News 2",
    description: "Description 2",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s"
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content={news.title} />
        <meta property="og:description" content={news.description} />
        <meta property="og:image" content={news.imageUrl} />
        <meta
          property="og:url"
          content={`https://majestic-blancmange-b8082b.netlify.app/news${news.id}`}
        />
      </Helmet>

      <div>
        <h1>{news.title}</h1>
        <img src={news.imageUrl} alt={news.title} />
        <p>{news.description}</p>
      </div>
    </>
  );
};

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={NewsFeed} />
      <Route path="/news1" component={NewsReadMore1} />
      <Route path="/news2" component={NewsReadMore2} />
    </Switch>
  </Router>
);

export default App;
