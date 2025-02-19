import React, { useEffect } from "react";
// import Container from "../components/Util/Container";
// import NavigationBar from "../components/Navbar/NavigationBar";
// import {
//   footerBackground,
//   footerPadding,
//   skillsBackground,
//   noMargin
// } from "../stylesheets/Home.scss";
// import Footer from "../components/Footer/Footer";
// import HorizontalRuler from "../components/Util/HorizontalRuler";
// import AboutMe from "../components/Section/AboutMe";
// import Projects from "../components/Section/Projects";
// import Skills from "../components/Section/Skills";
// import BlogShowcase from "../components/Section/BlogShowcase";
// import Landing from "../components/Section/Landing";
// import { firebaseAnalytics } from "../firebaseConfig";
import MetaDecorator from "../components/Util/MetaDecorator";
import metaThumbnail from "../data/images/meta/home.png";

const content = require("../data/content.json");

const Home = () => {
  // const horizontalRuler = (
  //   <div className="skillsBackground">
  //     <Container>
  //       <HorizontalRuler isThick className="noMargin" />
  //     </Container>
  //   </div>
  // );

  useEffect(() => {
    // firebaseAnalytics.logEvent("homepage_visited");
  });

  return (
    <>
      <MetaDecorator
        description={content.pageDescription}
        title={content.pageTitle}
        // imageUrl={metaThumbnail}
        imageUrl="https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg"
        imageAlt={content.metaImageAlt}
      />
      <div>hello</div>
      {/* <NavigationBar />
      <Landing
        id={content.landingReference}
        arrowAnimationReference={content.aboutMeReference}
      />
      <AboutMe id={content.aboutMeReference} />
      {horizontalRuler}
      <Projects id={content.projectsReference} />
      {horizontalRuler}
      <Skills id={content.skillsReference} />
      {horizontalRuler}
      <BlogShowcase id={content.latestBlogPostsReference} />

      <div
        id={content.contactReference}
        className={`${footerBackground} ${footerPadding}`}
      >
        <Container noPadding>
          <Footer />
        </Container>
      </div> */}
    </>
  );
};

export default Home;
