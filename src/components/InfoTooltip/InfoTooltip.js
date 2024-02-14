import "./InfoTooltip.css";

function InfoTooltip(props) {
    const { isOpen, onClose, message } = props;

    return (
        <div className={`popup ${isOpen ? 'popup_opened' : ''} `}
            onClick={(e) => {
                if (e.target.classList.contains('popup_opened')) {
                    onClose()
                }
            }}
        >
            <div className="popup__container popup__succes">
                <button
                    type="button"
                    className="popup__close-btn"
                    onClick={onClose}
                ></button>
                <p className="popup__succes-text">{message}</p>
            </div>
        </div >
    )
}

export default InfoTooltip;