import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";
import '../styles/DropdownMenu.css';

const CreateDocumentModal = ({ children, isOpen, onClose }) => {
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);

        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className={'input-box-overlay'}>
            <div className={'input-box'} ref={modalRef}>
                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}

export default CreateDocumentModal;