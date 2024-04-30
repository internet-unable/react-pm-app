export default function Button({ children }) {
    const defaultClasses = 'text-stone-50 bg-purple-500 p-3 rounded-lg';

    return (
        <button
            type="button"
            className={defaultClasses}
        >
            {children}
        </button>
    );
}