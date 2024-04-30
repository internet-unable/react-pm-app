import Button from "../Button/Button.jsx";

export default function Sidebar({ handleAddBtnClick, projectsList, selectActiveProject }) {
    console.log(`Sidebar ${projectsList}`);
    return (
        <aside className="h-full overflow-x-auto bg-stone-950 rounded-tr-2xl basis-96 text-stone-50">
            <h1 className="text-2xl">Your projects</h1>
            <Button handleClick={handleAddBtnClick}>+ Add project</Button>
            <ul>
                {projectsList.map(item => {
                    return (
                        <li
                            onClick={() => selectActiveProject(item)}
                            key={`${item.title}_${item.desc}_${item.dueDate}`}
                        >
                            {item.title}
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}