import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import NoProject from "./components/NoProject/NoProject.jsx";
import CreateProject from "./components/createProject/createProject.jsx";
import SelectedProject from "./components/SelectedProject/SelectedProject.jsx";

function App() {
    const [appState, setAppState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: []
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

    function handleProjectSelect(id) {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id
            }
        });
    }

    function handleDeleteSelectedProject(id) {
        setAppState(prevState => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(item => item.id !== id)
            };
        });
    }

    function handleAddTask(taskName) {
        if (taskName) {
            setAppState(prevState => {
                const newTask = {
                    id: Math.floor(Math.random() * 1000),
                    projectId: prevState.selectedProjectId,
                    taskName: taskName
                };
    
                return {
                    ...prevState,
                    tasks: [...prevState.tasks, newTask]
                }
            });
        }
    }

    function handleDeleteTask(id) {
        setAppState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(item => item.id !== id)
            }
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
                        taskList={appState.tasks}
                        onAddTask={handleAddTask}
                        onDeleteTask={handleDeleteTask}
                    />;
            break;
    }

    return (
        <main className="h-screen pt-8 flex">
            <Sidebar
                onCreateProject={handleCreateProject}
                onProjectSelect={handleProjectSelect}
                projectsList={appState.projects}
                selectedProjectId={appState.selectedProjectId}
            />

            {content}
        </main>
    );
}

export default App;
