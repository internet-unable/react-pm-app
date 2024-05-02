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
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <Button>Close</Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;