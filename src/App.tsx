import React, { useState } from "react";
import "./App.css";
import Toolbar from "./components/Sidenav";
import BodyContent from "./components/BodyContent";

function App() {
  const [tabName, setTabName] = useState("lessonPlan");
  const selectTabHandler = (selectedTab: string) => {
    setTabName(selectedTab);
  };
  return (
    <>
      <Toolbar selectTab={selectTabHandler} />
      <BodyContent tabName={tabName} />
    </>
  );
}

export default App;
