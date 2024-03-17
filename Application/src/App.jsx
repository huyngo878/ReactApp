import { useState } from "react";

import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewTask from "./components/NewTask.jsx";
import NoTaskSelected from "./components/NoTaskSelected.jsx";
import Login from "./components/Login.jsx";

function App() {
  const [taskState, setTaskState] = useState({
    selectedTaskID: undefined,
    Tasks: [],
  });

  // Initialize isLoggedIn state here
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleStartAddTask() {
    setTaskState((prevState) => {
      return { ...prevState, selectedTaskID: null };
    });
  }

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  // Ensure the Login component receives the onLoginSuccess prop correctly
  // if (!isLoggedIn) {
  //   return <Login onLoginSuccess={handleLoginSuccess} />;
  // }

  let content;
  if (taskState.selectedTaskID === null) {
    content = <NewTask />;
  } else if (taskState.selectedTaskID === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartAddTask} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddTask={handleStartAddTask} />
      {content}
    </main>
  );
}

export default App;
