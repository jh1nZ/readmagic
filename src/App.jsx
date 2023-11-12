import React from "react";

// Components
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";
import Bookinfo from "./components/Bookinfo";
import Comment from "./components/Comment";
import Hero from "./components/Hero";
import Recom from "./components/Recom";
import ShowBook from "./components/ShowBook";
import Readcomment from "./components/Readcomment";

//Story
import Giant from "./components/Giant";
import Stingyman from "./components/Stingyman";
import Wondergirl from "./components/Wondergirl";
import Princess from "./components/Princess";
import Myghtydog from "./components/Mightydog";
import Lonelyfox from "./components/Lonelyfox";
import Magickingdom from "./components/Magickingdom";
import Foxwgrapes from "./components/Foxwgrapes";
import Fairy from "./components/Fairy";
import Curiosmaan from "./components/Curiosmaan";

function App() {
  return (
    <div>
      {/*---  HEADER --- */}

      <Navbar />

      {/*---  Home --- */}

      {/* <Hero />
      <ShowBook /> */}

      {/*--- AllBooks --- */}

      {/* <Recom/> */}

      <Aboutus/>

      {/* ---Story--- */}

      {/* <Stingyman/><Comment/> */}
      {/* <Giant/><Comment/> */}
      {/* <Wondergirl/><Comment/> */}
      {/* <Princess/><Comment/> */}
      {/* <Myghtydog/><Comment/> */}
      {/* <Lonelyfox/><Comment/> */}
      {/* <Magickingdom/><Comment/> */}
      {/* <PrinFoxwgrapescess/><Comment/> */}
      {/* <Fairy/><Comment/> */}
      {/* <Curiosmaan/><Comment/> */}

      {/* <Readcomment /> */}
    </div>
  );
}

export default App;
