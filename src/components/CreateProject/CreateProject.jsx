import { useRef, useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

export default function CreateProject({ onCancelProjectCreation, onSave }) {
    const projectTitle = useRef();
    const projectDesc = useRef();
    const projectDueDate = useRef();
    const [titleInvalid, setTitleInvalid] = useState('');

    function handleSave() {
        if (projectTitle.current.value) {
            onSave({
                id: Math.floor(Math.random() * 1000),
                title: projectTitle.current.value,
                desc: projectDesc.current.value,
                dueDate: projectDueDate.current.value,
            });
        } else {
            // setTitleInvalid('bg-red-500');
            console.log('Title is empty');
        }
    }

    return (
        <section className="flex flex-col justify-center grow px-8">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><Button onClick={onCancelProjectCreation} isText>Cancel</Button></li>
                <li><Button onClick={handleSave}>Save</Button></li>
            </menu>

            <ul>
                <li className="flex flex-col gap-1 my-4">
                    <Input
                        ref={projectTitle}
                        id="title"
                        label="Title"
                        type="text"
                        placeholder="Title"
                    />
                </li>

                <li className="flex flex-col gap-1 my-4">
                    <Input
                        ref={projectDesc}
                        isTextarea
                        id="desc"
                        label="Description"
                        placeholder="Description"
                    />
                </li>

                <li className="flex flex-col gap-1 my-4">
                    <Input
                        ref={projectDueDate}
                        id="due-date"
                        label="Due date"
                        type="date"
                        placeholder="Due date"
                    />
                </li>
            </ul>
        </section>
    );
}