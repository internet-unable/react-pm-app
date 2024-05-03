import { useState, useRef } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import Modal from "../Modal/Modal.jsx";

export default function Tasks({ taskList, onAdd, onDelete }) {
    const modal = useRef();
    const [taskName, setTaskName] = useState('');

    function handleTaskNameChange(event) {
        setTaskName(event.target.value);
    }

    function handleAddTask() {
        if (taskName !== '') {
            onAdd(taskName)
            setTaskName('');
        } else {
            modal.current.open();
        }
    }

    function handleDeleteTask(id) {
        onDelete(id);
    }

    return (
        <>
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-700 my-5">Invalid input</h2>
                <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a task name.</p>
            </Modal>

            <div className="w-1/2">
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

                <div className="flex items-center gap-4">
                    <Input
                        id="tasks"
                        type="text"
                        placeholder="Task name"
                        onChange={handleTaskNameChange}
                        value={taskName}
                    />
                    <Button onClick={handleAddTask}>Add task</Button>
                </div>

                {taskList.length === 0 && <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>}
                {taskList.length > 0 && (
                    <ul className="mt-8">
                        {taskList.map(item => {
                            return (
                                <li key={item.id} className="flex justify-between gap-4 p-4 my-4 rounded-md bg-stone-100">
                                    <p>{item.taskName}</p>
                                    <Button
                                        styleType="custom"
                                        className="text-stone-700 hover:text-red-500"
                                        onClick={() => handleDeleteTask(item.id)}
                                    >
                                        Clear
                                    </Button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </>
    );
}