import Button from "../Button/Button.jsx";

export default function Sidebar({ onCreateProject, onProjectSelect, projectsList }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={onCreateProject}>+ Add project</Button>
            </div>
            <ul>
                {projectsList.map(item => {
                    return (
                        <li
                            onClick={() => onProjectSelect(item)}
                            key={item.id}
                        >
                            {item.title}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}