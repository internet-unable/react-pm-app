import { useRef, forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button/Button.jsx';

const Modal = forwardRef(({ children }, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="flex justify-end mt-4">
                <Button>Close</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;