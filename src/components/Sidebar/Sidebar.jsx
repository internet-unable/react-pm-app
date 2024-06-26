import Button from "../Button/Button.jsx";

export default function Sidebar({ onCreateProject, onProjectSelect, projectsList, selectedProjectId }) {
    const btnStylesDefault = 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800';
    const btnStylesActive = 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-200 bg-stone-800 hover:text-stone-200 hover:bg-stone-800';

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl overflow-x-auto">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
            <div>
                <Button onClick={onCreateProject}>+ Add project</Button>
            </div>

            <ul className="mt-8">
                {projectsList.map(item => {
                    return (
                        <li key={item.id}>
                            <Button
                                styleType="custom"
                                className={item.id === selectedProjectId ? btnStylesActive : btnStylesDefault}
                                onClick={() => onProjectSelect(item.id)}
                            >
                                {item.title}
                            </Button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}