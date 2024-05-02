import { forwardRef } from "react";

const Input = forwardRef(({ isTextarea, label, id, ...props }, ref) => {
    const stylesForLabel = 'text-sm font-bold uppercase text-stone-500';
    const stylesForField = 'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

    return (
        <>
            {label && <label htmlFor={id} className={stylesForLabel} >{label}</label>}
            {isTextarea ? 
                (<textarea id={id} className={stylesForField} {...props} ref={ref} />)
                :
                (<input id={id} className={stylesForField} {...props} ref={ref} />)
            }
        </>
    );
});

export default Input;