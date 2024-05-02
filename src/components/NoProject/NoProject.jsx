import img from '../../assets/no-projects.png';
import Button from '../Button/Button.jsx';

export default function NoProject({ handleCreateBtnClick }) {
    return (
        <section className="flex flex-col justify-center items-center grow px-8">
            <img className="size-16 object-contain" src={img} alt="An empty task list" />
            <h2 className="text-xl font-bold text-stone-500 my-5">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8">
                <Button handleClick={handleCreateBtnClick}>Create new project</Button>
            </p>
        </section>
    );
}