import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import NoProject from "./components/NoProject/NoProject.jsx";
import CreateProject from "./components/createProject/createProject.jsx";
import SelectedProject from "./components/SelectedProject/SelectedProject.jsx";

const panels = {
    noProjectSelected: 'no-project-selected',
    addProject: 'add-project',
    selectedProject: 'selected-project'
};

function App() {
    const [activePanel, setActivePanel] = useState(panels.noProjectSelected);
    const [projectsList, setProjectsList] = useState([]);
    const [activeProject, setActiveProject] = useState();

    function saveNewProject(project) {
        setProjectsList(prevList => {
            return [
                ...prevList,
                project
            ];
        });
        setActivePanel(panels.noProjectSelected);
    }

    function deleteSelectedProject(id) {
        setProjectsList(prevProjectList => {
            let projects = [...prevProjectList];
            const project = projects.find(item => item.id === id);
            const projectIndex = projects.indexOf(project);

            projects.splice(projectIndex, 1);
            return projects;
        });
        setActivePanel(panels.noProjectSelected);
    }

    function selectActiveProject(item) {
        setActivePanel(panels.selectedProject);
        setActiveProject(item);
    }

    function handlePanelChange(type) {
        setActivePanel(type);
    }

    let content;
    switch (activePanel) {
        case panels.noProjectSelected:
            content = <NoProject onPanelChange={() => handlePanelChange(panels.addProject)} />;
            break;

        case panels.addProject:
            content = <CreateProject
                        onPanelChange={() => handlePanelChange(panels.noProjectSelected)}
                        handleSaveBtnClick={saveNewProject}
                    />;
            break;

        case panels.selectedProject:
            content = <SelectedProject project={activeProject} handleDeleteBtnClick={deleteSelectedProject} />;
            break;
    }

    return (
        <main className="h-screen pt-8 flex">
            <Sidebar
                onPanelChange={() => handlePanelChange(panels.addProject)}
                projectsList={projectsList}
                selectActiveProject={selectActiveProject}
            />

            {content}
        </main>
    );
}

export default App;
