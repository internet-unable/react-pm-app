export default function TextArea({ id, label, placeholder }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} placeholder={placeholder}></textarea>
        </>
    );
}