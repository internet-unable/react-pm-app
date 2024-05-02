export default function Button({ isText, handleClick, children }) {
    const stylesAsBtn = 'px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100';
    const stylesAsText = 'text-stone-800 hover:text-stone-950';

    return (
        <button
            type="button"
            className={isText ? stylesAsText: stylesAsBtn}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}