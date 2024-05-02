import { forwardRef } from "react";

const Input = forwardRef(({ id, classes, label, type, placeholder }, ref) => {
    console.log('Input loaded');
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} className={classes} type={type} placeholder={placeholder} ref={ref} />
        </>
    );
});

export default Input;