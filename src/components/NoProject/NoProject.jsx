import img from '../../assets/no-projects.png';
import Button from '../Button/Button.jsx';

export default function NoProject({ handleCreateBtnClick }) {
    console.log('NoProject loaded');
    return (
        <section className="flex flex-col justify-center items-center grow h-full overflow-x-auto">
            <img className="size-20" src={img} alt="" />
            <h1 className="text-2xl">No Project Selected</h1>
            <p>Select a project or get started with a new one</p>
            <Button handleClick={handleCreateBtnClick}>Create new project</Button>
        </section>
    );
}