import React from "react";
import Businesstip from "../Businesstip/Businesstip";
import Whyrmax from "../Whyrmax/Whyrmax";
import Herosection from "../Herosection/Herosection.jsx";
import Empowering from "../Empowering/Empowering.jsx";
import Chooseplan from "../Chooseplan/Chooseplan.jsx";
import Manage from "../Manage/Manage.jsx";
import Questions from "../Questions/Questions.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Header />
      <Herosection />
      <Businesstip />
      <Whyrmax />
      <Empowering />
      <Chooseplan />
      <Manage />
      <Questions />
      <Footer />
    </div>
  );
};

export default Homepage;
