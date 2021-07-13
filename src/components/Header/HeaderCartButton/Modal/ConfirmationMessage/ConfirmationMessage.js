import styles from './ConfirmationMessage.module.css';

import { Fragment } from 'react';

function ConfirmationMessage(props) {
  return (
    <Fragment>
      <div className={styles.right}>
        <h2>Thank you! Your order was submitted successfully.</h2>
        <button onClick={props.onHideModal}>Back to main screen</button>
      </div>
    </Fragment>
  );
}

export default ConfirmationMessage;
