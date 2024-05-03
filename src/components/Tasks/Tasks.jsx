import { useRef, useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

export default function Tasks() {
    const taskNameValue = useRef();
    const [taskList, setTaskList] = useState([]);

    function handleAddTaskBtnClick() {
        if (taskNameValue.current.value) {
            setTaskList(prevTaskList => {
                const taskName = taskNameValue.current.value;
                taskNameValue.current.value = '';

                return [
                    ...prevTaskList,
                    {
                        id: Math.floor(Math.random() * 1000),
                        taskName: taskName
                    }
                    
                ];
            });
        }
    }

    function handleClearTaskBtnClick(id) {
        setTaskList(prevTaskList => {
            let taskList = [...prevTaskList];
            const task = taskList.find(item => item.id === id);
            const taskIndex = taskList.indexOf(task);

            taskList.splice(taskIndex, 1);
            return taskList;
        });
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

            <div className="flex items-center gap-4">
                <div className="w-64">
                    <Input
                        id="tasks"
                        type="text"
                        placeholder="Task name"
                        ref={taskNameValue}
                    />
                </div>
                <Button onClick={handleAddTaskBtnClick}>Add task</Button>
            </div>

            {taskList.length < 1 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
            {taskList.length >= 1 && 
                <ul>
                {taskList.map(item => {
                    return (
                        <li key={item.id}>
                            <div>
                                <p>{item.taskName}</p>
                                <Button onClick={() => handleClearTaskBtnClick(item.id)}>Clear</Button>
                            </div>
                        </li>
                    );
                })}
            </ul>}
        </div>
    );
}