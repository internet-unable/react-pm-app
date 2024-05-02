export default function Button({ handleClick, stylesType, children, ...props }) {
    let styles;
    switch (stylesType) {
        case 'text':
            styles = 'text-stone-600 hover:text-stone-950';
            break;

        case 'custom':
            styles = [...props.className];
            break;

        default:
            styles = 'px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100';
            break;
    }

    return (
        <button
            className={styles}
            {...props}
        >
            {children}
        </button>
    );
}