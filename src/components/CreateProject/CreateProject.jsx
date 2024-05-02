import { useRef, useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

export default function CreateProject({ handleCancelBtnClick, handleSaveBtnClick }) {
    const projectTitle = useRef();
    const projectDesc = useRef();
    const projectDueDate = useRef();
    const [titleInvalid, setTitleInvalid] = useState('');

    function collectDataAndSave() {
        if (projectTitle.current.value) {
            handleSaveBtnClick({
                id: Math.floor(Math.random() * 1000),
                title: projectTitle.current.value,
                desc: projectDesc.current.value,
                dueDate: projectDueDate.current.value,
            });
        } else {
            setTitleInvalid('bg-red-500');
        }
    }

    return (
        <section className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><Button isText handleClick={handleCancelBtnClick}>Cancel</Button></li>
                <li><Button handleClick={collectDataAndSave}>Save</Button></li>
            </menu>

            <ul>
                <li>
                    <Input
                        ref={projectTitle}
                        id="title"
                        label="Title"
                        type="text"
                        placeholder="Title"
                    />
                </li>

                <li>
                    <Input
                        ref={projectDesc}
                        isTextarea
                        id="desc"
                        label="Description"
                        placeholder="Description"
                    />
                </li>

                <li>
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