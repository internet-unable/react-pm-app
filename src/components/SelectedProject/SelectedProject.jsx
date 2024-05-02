import Button from "../Button/Button.jsx";
import Tasks from "../Tasks/Tasks.jsx";

export default function SelectedProject({ project, handleDeleteBtnClick }) {
    return (
        <section className="flex flex-col justify-center items-center grow h-full overflow-x-auto">
            <h1>{project.title}</h1>
            <Button handleClick={() => handleDeleteBtnClick(project.id)}>Delete</Button>
            <p>{project.dueDate}</p>
            <p>{project.desc}</p>

            <Tasks />
        </section>
    );
}