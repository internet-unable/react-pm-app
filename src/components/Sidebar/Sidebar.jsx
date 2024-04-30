import Button from "../Button/Button.jsx";

export default function Sidebar() {
    return (
        <aside className="h-full overflow-x-auto bg-stone-950 rounded-tr-2xl basis-96 text-stone-50">
            <h1 className="text-2xl">Your projects</h1>
            <Button>+ Add projects</Button>
            <ul>
                <li>Project name</li>
                <li>Project name</li>
            </ul>
        </aside>
    );
}