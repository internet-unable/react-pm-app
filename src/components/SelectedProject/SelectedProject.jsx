import { useRef, useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

export default function SelectedProject({ project }) {
    const taskNameValue = useRef();
    const [taskList, setTaskList] = useState([]);

    function handleDeleteBtnClick() {
        // todo - delete project
    }

    function handleAddTaskBtnClick() {
        if (taskNameValue.current.value) {
            setTaskList(prevTaskList => {
                return [
                    ...prevTaskList,
                    {
                        id: Math.floor(Math.random() * 1000),
                        taskName: taskNameValue.current.value
                    }
                    
                ];
            });
        }
        // todo - clear task name input, after click on btn
    }

    function handleClearTaskBtnClick(id) {
        setTaskList(prevTaskList => {
            let array = [...prevTaskList];
            const itemInArrayById = array.find(item => item.id === id);
            const indexOfItemInArray = array.indexOf(itemInArrayById);

            array.splice(indexOfItemInArray, 1);
            return array;
        });
    }

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
                        ref={taskNameValue}
                    />
                    <Button handleClick={handleAddTaskBtnClick}>Add task</Button>
                </div>
                <ul>
                    {taskList.map(item => {
                        return (
                            <li key={item.id}>
                                <div>
                                    <p>{item.taskName}</p>
                                    <Button handleClick={() => handleClearTaskBtnClick(item.id)}>Clear</Button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}