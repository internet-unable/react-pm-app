import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

export default function SelectedProject() {
    return (
        <section className="flex flex-col justify-center items-center grow h-full overflow-x-auto">
            <h1>Project name</h1>
            <Button>Delete</Button>
            <p>Project due date</p>

            <div>
                <p>Project desc</p>
                <p>Project desc</p>
            </div>

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