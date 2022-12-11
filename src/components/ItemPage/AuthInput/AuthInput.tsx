import { useState } from "react";
import { DropDownList } from "../../../components";
import { InputProps } from "../../../types/Types";
import "./AuthInput.scss";

export const AuthInput: React.FC<InputProps> = ({
  dropdownList,
  iconLeft,
  type,
  placeholder,
  error,
  labelText,
  getText,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);
  const [myType, setMyType] = useState(type);

  const style = {
    inputStyle: {},
    errorStyle: {},
  };

  if (type === "password") style.inputStyle = { paddingRight: "40px" };

  if (iconLeft) style.inputStyle = { paddingLeft: "55px" };

  if (dropdownList) style.inputStyle = { paddingRight: "63px" };

  if (iconLeft && dropdownList)
    style.inputStyle = { paddingLeft: "55px", paddingRight: "63px" };

  if (error) style.errorStyle = { border: "2px solid #F57F53" };

  function showPasswordHandler() {
    if (type === "password" && !showPassword) {
      setMyType("text");
      setShowPassword(true);
    }
    if (type === "password" && showPassword) {
      setMyType("password");
      setShowPassword(false);
    }
  }

  function clearFieldHandler() {
    setInputValue("");
  }

  function pickDropDownItem(item: string) {
    setDropDownActive(false);
    setInputValue(item);
  }

  return (
    <div className='auth-input'>
      <label>{labelText}</label>
      {iconLeft && (
        <div className='icon-left'>
          <img src={iconLeft} alt='icon' />
        </div>
      )}
      <input
        style={{ ...style.errorStyle, ...style.inputStyle }}
        type={myType || type}
        value={inputValue}
        placeholder={placeholder}
        onFocus={() => setDropDownActive(true)}
        onChange={(e) => setInputValue(e.target.value)}
        ref={getText}
        {...props}
      />
      {dropdownList && dropDownActive && (
        <div className='drop-down'>
          <DropDownList citiesList={dropdownList} pickCity={pickDropDownItem} />
        </div>
      )}
      {type === "password" && (
        <div className='icon-right' onClick={showPasswordHandler}>
          {!showPassword && (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 10C2 10 5.5 14 12 14C18.5 14 22 10 22 10M4 11.645L2 14M22 14L20.004 11.648M8.914 13.68L8 16.5M15.063 13.688L16 16.5'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
          {showPassword && (
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.2565 10.962C21.7305 11.582 21.7305 12.419 21.2565 13.038C19.7635 14.987 16.1815 19 11.9995 19C7.81752 19 4.23552 14.987 2.74252 13.038C2.51191 12.7411 2.38672 12.3759 2.38672 12C2.38672 11.6241 2.51191 11.2589 2.74252 10.962C4.23552 9.013 7.81752 5 11.9995 5C16.1815 5 19.7635 9.013 21.2565 10.962V10.962Z'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          )}
        </div>
      )}
      {dropdownList && (
        <>
          <div
            className='icon-right'
            onClick={() => setDropDownActive(!dropDownActive)}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_75_109)'>
                <path d='M7 10L12 15L17 10H7Z' fill='black' />
              </g>
              <defs>
                <clipPath id='clip0_75_109'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
          {inputValue && (
            <div className='icon-right clear' onClick={clearFieldHandler}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_94_3314)'>
                  <path
                    d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
                    fill='black'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_94_3314'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
        </>
      )}
    </div>
  );
};
