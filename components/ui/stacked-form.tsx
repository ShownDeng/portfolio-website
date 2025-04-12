'use client';

import React from 'react';
import styled from 'styled-components';
//import type { StyledComponent } from 'styled-components';

const StackedForm = () => {
  return (
    <StyledWrapper>
      <form className="stackedForm">
        <ul className="wrapper">
          <li style={{['--i' as string]: 4}}>
            <input required placeholder="Name" type="text" className="input" />
          </li>
          <li style={{['--i' as string]: 3}}>
            <input name="email" required placeholder="E-mail" type="email" className="input" />
          </li>
          <li style={{['--i' as string]: 2}}>
            <input name="subject" required placeholder="Subject" type="text" className="input" />
          </li>
          <li style={{['--i' as string]: 1}}>
            <textarea name="message" required placeholder="Message" className="input" />
          </li>
          <button style={{['--i' as string]: 0}}><span>Send Message</span></button>
        </ul>
      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .stackedForm {
    --form-btn-color-3: rgba(39, 39, 42, 0.8);
    --form-btn-color-2: rgba(63, 63, 70, 0.8);
    --form-btn-color-1: rgba(82, 82, 91, 0.8);
    --form-btn-color: rgb(113, 113, 122);
    --form-btn-active-color: rgb(161, 161, 170);
    --form-rotation: rotate3d(0, 1, 0, 180deg);
    --form-text-padding-left: 10px;
    transform: var(--form-rotation);
  }

  .stackedForm .input,
  .stackedForm button {
    width: 100%;
    height: 40px;
    position: relative;
    padding: 10px;
    border: 0.1px solid var(--form-btn-active-color);
  }

  .stackedForm textarea.input {
    height: 80px;
    resize: none;
  }

  .stackedForm button {
    background: var(--form-btn-color);
    border: none;
    cursor: pointer;
  }

  .stackedForm button span {
    display: block;
    transform: var(--form-rotation);
    color: white;
  }

  .stackedForm .wrapper {
    position: relative;
    transform: skewY(-14deg);
    padding: 0;
  }

  .stackedForm .wrapper li,
  .stackedForm button {
    position: relative;
    list-style: none;
    width: 100%;
    max-width: 500px;
    z-index: var(--i);
    transition: 0.3s;
    margin: 0;
  }

  .stackedForm .wrapper li::before,
  .stackedForm button::before {
    position: absolute;
    content: "";
    background: var(--form-btn-color);
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.3s;
  }

  .stackedForm .wrapper li::after,
  .stackedForm button::after {
    position: absolute;
    content: "";
    background: var(--form-btn-color);
    width: 100%;
    height: 40px;
    top: -40px;
    left: 0;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.3s;
  }

  .stackedForm .wrapper li:nth-child(1)::after,
  .stackedForm .wrapper li:nth-child(1)::before {
    background-color: var(--form-btn-color-3);
  }

  .stackedForm .wrapper li:nth-child(2)::after,
  .stackedForm .wrapper li:nth-child(2)::before {
    background-color: var(--form-btn-color-2);
  }

  .stackedForm .wrapper li:nth-child(3)::after,
  .stackedForm .wrapper li:nth-child(3)::before {
    background-color: var(--form-btn-color-1);
  }

  .stackedForm .wrapper li:nth-child(4)::after,
  .stackedForm .wrapper li:nth-child(4)::before {
    background-color: var(--form-btn-color);
  }

  .stackedForm li .input {
    outline: none;
    border: none;
    padding: 10px;
    padding-left: var(--form-text-padding-left);
    width: 100%;
    color: white;
    background: transparent;
    transform: var(--form-rotation);
  }

  .stackedForm li .input::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  .stackedForm li:nth-child(1) {
    background: var(--form-btn-color-3);
  }

  .stackedForm li:nth-child(2) {
    background: var(--form-btn-color-2);
  }

  .stackedForm li:nth-child(3) {
    background: var(--form-btn-color-1);
  }

  .stackedForm li:nth-child(4) {
    background: var(--form-btn-color);
  }

  .stackedForm .wrapper li:hover,
  .stackedForm button:hover,
  .stackedForm .wrapper li:has(input:focus),
  .stackedForm button:focus {
    transform: translateX(-20px);
  }

  .stackedForm button:hover,
  .stackedForm button:hover::before,
  .stackedForm button:hover::after,
  .stackedForm button:focus,
  .stackedForm button:focus::before,
  .stackedForm button:focus::after {
    background: var(--form-btn-active-color);
  }

  .stackedForm button:active {
    transform: translateX(0px);
  }
`;

export default StackedForm;