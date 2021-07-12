import { useState } from 'react';
import styles from './CheckoutForm.module.css';

function CheckoutForm(props) {
  const [enteredFName, setEnteredFName] = useState('');
  const [enteredLName, setEnteredLName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredStreet, setEnteredStreet] = useState('');
  const [enteredPostalCode, setEnteredPostalCode] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [fNameIsTouched, setFNameIsTouched] = useState(false);
  const [lNameIsTouched, setLNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [streetIsTouched, setStreetIsTouched] = useState(false);
  const [postalCodeIsTouched, setPostalCodeIsTouched] = useState(false);
  const [numberIsTouched, setNumberIsTouched] = useState(false);

  const validFName = enteredFName.trim() !== '';
  const invalidFNameInput = !validFName && fNameIsTouched;
  const validLName = enteredLName.trim() !== '';
  const invalidLNameInput = !validLName && lNameIsTouched;
  const validEmail = enteredEmail.includes('@');
  const invalidEmailInput = !validEmail && emailIsTouched;
  const validStreet = enteredStreet.trim() !== '';
  const invalidStreetInput = !validStreet && streetIsTouched;
  const validPostalCode = enteredPostalCode.trim() !== '';
  const invalidPostalCodeInput = !validPostalCode && postalCodeIsTouched;
  const validNumber = enteredNumber.trim() !== '';
  const invalidNumberInput = !validNumber && numberIsTouched;

  const onChangeFNameHandler = function (e) {
    setEnteredFName(e.target.value);
  };
  const onChangeLNameHandler = function (e) {
    setEnteredLName(e.target.value);
  };
  const onChangeEmailHandler = function (e) {
    setEnteredEmail(e.target.value);
  };
  const onChangeStreetHandler = function (e) {
    setEnteredStreet(e.target.value);
  };
  const onChangePostalCodeHandler = function (e) {
    setEnteredPostalCode(e.target.value);
  };
  const onChangeNumberHandler = function (e) {
    setEnteredNumber(e.target.value);
  };

  const onBlurFNameHandler = function () {
    setFNameIsTouched(true);
  };
  const onBlurLNameHandler = function () {
    setLNameIsTouched(true);
  };
  const onBlurEmailHandler = function () {
    setEmailIsTouched(true);
  };
  const onBlurStreetHandler = function () {
    setStreetIsTouched(true);
  };
  const onBlurPostalCodeHandler = function () {
    setPostalCodeIsTouched(true);
  };
  const onBlurNumberHandler = function () {
    setNumberIsTouched(true);
  };

  const sendData = async function (user) {
    try {
      await fetch(
        'https://react-http-484b3-default-rtdb.europe-west1.firebasedatabase.app/users.json',
        {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/ json',
          },
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitHandler = function (e) {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    const user = {
      name: `${enteredFName} ${enteredLName}`,
      email: enteredEmail,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      number: enteredNumber,
    };

    sendData(user);

    setFNameIsTouched(false);
    setLNameIsTouched(false);
    setEmailIsTouched(false);
    setStreetIsTouched(false);
    setPostalCodeIsTouched(false);
    setNumberIsTouched(false);
    setEnteredFName('');
    setEnteredLName('');
    setEnteredEmail('');
    setEnteredStreet('');
    setEnteredPostalCode('');
    setEnteredNumber('');
  };

  let formIsValid = false;
  if (
    validFName &&
    validLName &&
    validEmail &&
    validStreet &&
    validPostalCode &&
    validNumber
  ) {
    formIsValid = true;
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles['control-group']}>
        <div
          className={`${styles['form-control']} ${
            invalidFNameInput ? styles['invalid'] : ''
          }`}
        >
          <label htmlFor='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            onChange={onChangeFNameHandler}
            onBlur={onBlurFNameHandler}
            value={enteredFName}
          />
          {invalidFNameInput && (
            <p className={styles['error-text']}>
              Please enter a valid first name
            </p>
          )}
        </div>
        <div
          className={`${styles['form-control']} ${
            invalidLNameInput ? styles['invalid'] : ''
          } `}
        >
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            onChange={onChangeLNameHandler}
            onBlur={onBlurLNameHandler}
            value={enteredLName}
          />
          {invalidLNameInput && (
            <p className={styles['error-text']}>
              Please enter a valid last name
            </p>
          )}
        </div>
      </div>
      <div
        className={`
          ${styles['form-control']}  ${
          invalidEmailInput ? styles['invalid'] : ''
        }
        `}
      >
        <label htmlFor='email'>E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
          value={enteredEmail}
        />
        {invalidEmailInput && (
          <p className={styles['error-text']}>Please enter a valid email</p>
        )}
      </div>
      <div className={styles['control-group']}>
        <div
          className={`
          ${styles['form-control']}  ${
            invalidStreetInput ? styles['invalid'] : ''
          }
        `}
        >
          <label htmlFor='street'>Street</label>
          <input
            type='text'
            id='street'
            onChange={onChangeStreetHandler}
            onBlur={onBlurStreetHandler}
            value={enteredStreet}
          />
          {invalidStreetInput && (
            <p className={styles['error-text']}>Please enter a street</p>
          )}
        </div>
        <div
          className={`
          ${styles['form-control']}  ${
            invalidNumberInput ? styles['invalid'] : ''
          }
        `}
        >
          <label htmlFor='number'>Number</label>
          <input
            type='number'
            id='number'
            onChange={onChangeNumberHandler}
            onBlur={onBlurNumberHandler}
            value={enteredNumber}
            min='1'
          />
          {invalidNumberInput && (
            <p className={styles['error-text']}>Please enter a number</p>
          )}
        </div>
        <div
          className={`
          ${styles['form-control']}  ${
            invalidPostalCodeInput ? styles['invalid'] : ''
          }
        `}
        >
          <label htmlFor='postalCode'>Postal Code</label>
          <input
            type='text'
            id='postalCode'
            onChange={onChangePostalCodeHandler}
            onBlur={onBlurPostalCodeHandler}
            value={enteredPostalCode}
          />
          {invalidPostalCodeInput && (
            <p className={styles['error-text']}>Please enter a postal code</p>
          )}
        </div>
      </div>

      <div className={styles['form-actions']}>
        <button className={styles.button2} onClick={props.onHideModal}>
          Cancel
        </button>
        <button disabled={!formIsValid} onClick={props.onConfirm}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
