import img from '../../assets/no-projects.png';
import Button from '../Button/Button.jsx';

export default function NoProject() {
    return (
        <section className="flex flex-col justify-center items-center h-full overflow-x-auto grow">
            <img className="size-20" src={img} alt="" />
            <h1 className="text-2xl">No Project Selected</h1>
            <p>Select a project or get started with a new one</p>
            <Button>Create new project</Button>
        </section>
    );
}