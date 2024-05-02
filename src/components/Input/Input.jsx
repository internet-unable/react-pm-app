import { forwardRef } from "react";

const Input = forwardRef(({ isTextarea, label, id, ...props }, ref) => {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            { isTextarea ? <textarea id={id} {...props} ref={ref} /> : <input id={id} {...props} ref={ref} /> }
        </>
    );
});

export default Input;