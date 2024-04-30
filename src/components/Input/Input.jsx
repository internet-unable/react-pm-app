import { forwardRef } from "react";

const Input = forwardRef(({ id, label, type, placeholder }, ref) => {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} type={type} placeholder={placeholder} ref={ref} />
        </>
    );
});

export default Input;