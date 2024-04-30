export default function Input({ id, label, type, placeholder }) {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} type={type} placeholder={placeholder} />
        </>
    );
}