import Button from "../Button/Button.jsx";
import Tasks from "../Tasks/Tasks.jsx";

export default function SelectedProject({ project, onDeleteSelectedProject, onAddTask, onDeleteTask }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <section className="w-1/2 flex flex-col px-8 overflow-x-auto">
            <div className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <Button type="button" styleType="text" onClick={() => onDeleteSelectedProject(project.id)}>Delete</Button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.desc}</p>
            </div>

            <Tasks taskList={project.tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
        </section>
    );
}