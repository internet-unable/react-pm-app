import { forwardRef } from "react";

const TextArea = forwardRef(({ id, label, placeholder }, ref) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} placeholder={placeholder} ref={ref}></textarea>
        </>
    );
});

export default TextArea;