import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import NoProject from "./components/NoProject/NoProject.jsx";
import CreateProject from "./components/createProject/createProject.jsx";
import SelectedProject from "./components/SelectedProject/SelectedProject.jsx";

function App() {
    const [projectList, setProjectList] = useState();

    return (
        <main className="h-full flex">
            <Sidebar />
            {!projectList && <NoProject />}
            {/* <CreateProject /> */}
            {/* <SelectedProject /> */}
        </main>
    );
}

export default App;
