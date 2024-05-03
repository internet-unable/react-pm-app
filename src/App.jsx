import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import NoProject from "./components/NoProject/NoProject.jsx";
import CreateProject from "./components/createProject/createProject.jsx";
import SelectedProject from "./components/SelectedProject/SelectedProject.jsx";

function App() {
    const [appState, setAppState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleCreateProject() {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: null
            }
        });
    }

    function handleAddProject(newProject) {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject]
            };
        });
    }

    function handleCancelAddProject() {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined
            }
        });
    }

    function handleProjectSelect(item) {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: item.id
            }
        });
    }

    function handleDeleteSelectedProject(id) {
        setAppState(prevState => {
            let newProjectsArray = [...prevState.projects];
            const currentProject = newProjectsArray.find(item => item.id === id);
            const currentProjectIndex = newProjectsArray.indexOf(currentProject);
            newProjectsArray.splice(currentProjectIndex, 1);

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...newProjectsArray]
            };
        });
    }

    let content;
    switch (appState.selectedProjectId) {
        case undefined:
            content = <NoProject onCreateProject={handleCreateProject} />;
            break;

        case null:
            content = <CreateProject
                        onCancelAddProject={handleCancelAddProject}
                        onSave={handleAddProject}
                    />;
            break;

            default:
                content = <SelectedProject
                            project={appState.projects.find(item => item.id === appState.selectedProjectId)}
                            onDeleteSelectedProject={handleDeleteSelectedProject}
                        />;
                break;
    }

    return (
        <main className="h-screen pt-8 flex">
            <Sidebar
                onCreateProject={handleCreateProject}
                onProjectSelect={handleProjectSelect}
                projectsList={appState.projects}
            />

            {content}
        </main>
    );
}

export default App;
