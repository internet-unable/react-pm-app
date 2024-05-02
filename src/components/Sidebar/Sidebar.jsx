import Button from "../Button/Button.jsx";

export default function Sidebar({ handleAddBtnClick, projectsList, selectActiveProject }) {
    return (
        <aside className="h-full overflow-x-auto bg-stone-950 rounded-tr-2xl basis-96 text-stone-50">
            <h1 className="text-2xl">Your projects</h1>
            <Button handleClick={handleAddBtnClick}>+ Add project</Button>
            <ul>
                {projectsList.map(item => {
                    return (
                        <li
                            onClick={() => selectActiveProject(item)}
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