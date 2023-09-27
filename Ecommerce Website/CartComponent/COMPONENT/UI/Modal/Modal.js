import classes from './Modal.module.css'
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            <h1 className='text-center' style={{ fontFamily: 'Times New Roman' }}>CART</h1>
            <div className={classes.headingContainer}>
                <h5  style={{ fontFamily: 'Times New Roman' }}>TITLE </h5>
                <h5  style={{ fontFamily: 'Times New Roman' }}> PRICE</h5>
                <h5  style={{ fontFamily: 'Times New Roman' }}>QUANTITY</h5>
            </div>
            {props.children}
        </div>
    </div>

}


const Modal = (props) => {
    const Portal = document.getElementById("Overlays")
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onHit} />, Portal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, Portal)}
    </Fragment>

}
export default Modal;
