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

    function resolvePanelTypeToShow() {
        switch (activePanel) {
            case panels.noProjectSelected:
                return <NoProject onPanelChange={() => handlePanelChange(panels.addProject)} />;

            case panels.addProject:
                return <CreateProject
                            onPanelChange={() => handlePanelChange(panels.noProjectSelected)}
                            handleSaveBtnClick={saveNewProject}
                        />;

            case panels.selectedProject:
                return <SelectedProject project={activeProject} handleDeleteBtnClick={deleteSelectedProject} />;
        }
    }

    return (
        <main className="h-screen pt-8 flex">
            <Sidebar
                onPanelChange={() => handlePanelChange(panels.addProject)}
                projectsList={projectsList}
                selectActiveProject={selectActiveProject}
            />
            {resolvePanelTypeToShow()}
        </main>
    );
}

export default App;
