import { useRef, useState } from "react";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import TextArea from "../TextArea/TextArea.jsx";

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
        <form className="flex flex-col justify-center items-center grow h-full overflow-x-auto">
            <ul>
                <li>
                    <Button handleClick={handleCancelBtnClick}>Cancel</Button>
                </li>

                <li>
                    <Button handleClick={collectDataAndSave}>Save</Button>
                </li>
            </ul>

            <ul>
                <li>
                    <Input
                        id="title"
                        classes={titleInvalid}
                        label="Title"
                        type="text"
                        placeholder="Title"
                        ref={projectTitle}
                    />
                </li>

                <li>
                    <TextArea
                        id="desc"
                        label="Description"
                        placeholder="Description"
                        ref={projectDesc}
                    />
                </li>

                <li>
                    <Input
                        id="due-date"
                        label="Due date"
                        type="date"
                        placeholder="Due date"
                        ref={projectDueDate}
                    />
                </li>
            </ul>
        </form>
    );
}