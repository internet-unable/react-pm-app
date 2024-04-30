export default function Button({ handleClick, children }) {
    const defaultClasses = 'text-stone-50 bg-purple-500 p-3 rounded-lg';

    return (
        <button
            type="button"
            className={defaultClasses}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}