import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";
import TextArea from "../TextArea/TextArea.jsx";

export default function CreateProject() {
    return (
        <form className="flex flex-col justify-center items-center grow h-full overflow-x-auto">
            <ul>
                <li>
                    <Button>Cancel</Button>
                </li>

                <li>
                    <Button>Save</Button>
                </li>
            </ul>

            <ul>
                <li>
                    <Input
                        id="title"
                        label="Title"
                        type="text"
                        placeholder="Title"
                    />
                </li>

                <li>
                    <TextArea
                        id="desc"
                        label="Description"
                        placeholder="Description"
                    />
                </li>

                <li>
                    <Input
                        id="due-date"
                        label="Due date"
                        type="date"
                        placeholder="Due date"
                    />
                </li>
            </ul>
        </form>
    );
}