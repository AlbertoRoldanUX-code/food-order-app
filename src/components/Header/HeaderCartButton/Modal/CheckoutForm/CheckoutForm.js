import { useState } from 'react';
import styles from './CheckoutForm.module.css';

function CheckoutForm() {
  const [enteredFName, setEnteredFName] = useState('');
  const [enteredLName, setEnteredLName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [fNameIsTouched, setFNameIsTouched] = useState(false);
  const [lNameIsTouched, setLNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const validFName = enteredFName.trim() !== '';
  const invalidFNameInput = !validFName && fNameIsTouched;
  const validLName = enteredLName.trim() !== '';
  const invalidLNameInput = !validLName && lNameIsTouched;
  const validEmail = enteredEmail.includes('@');
  const invalidEmailInput = !validEmail && emailIsTouched;

  const onChangeFNameHandler = function (e) {
    setEnteredFName(e.target.value);
  };
  const onChangeLNameHandler = function (e) {
    setEnteredLName(e.target.value);
  };
  const onChangeEmailHandler = function (e) {
    setEnteredEmail(e.target.value);
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

  const onSubmitHandler = function (e) {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    setFNameIsTouched(false);
    setLNameIsTouched(false);
    setEmailIsTouched(false);
    setEnteredFName('');
    setEnteredLName('');
    setEnteredEmail('');
  };

  let formIsValid = false;
  if (validFName && validLName && validEmail) {
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
        <label htmlFor='email'>E-Mail Address</label>
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
      <div className={styles['form-actions']}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
}

export default CheckoutForm;
