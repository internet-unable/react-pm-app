import { useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

export default function SelectedProject({ project }) {
    const [taskList, setTaskList] = useState();

    return (
        <section className="flex flex-col justify-center items-center grow h-full overflow-x-auto">
            <h1>{project.title}</h1>
            <Button>Delete</Button>
            <p>{project.dueDate}</p>
            <p>{project.desc}</p>

            <div>
                <h1>Tasks</h1>
                <div>
                    <Input
                        id="tasks"
                        type="text"
                        placeholder="Task name"
                    />
                    <button>Add task</button>
                </div>
            </div>
        </section>
    );
}