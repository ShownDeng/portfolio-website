'use client';

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="honeycomb">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @-webkit-keyframes honeycomb {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    30%,
    70% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes honeycomb {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    30%,
    70% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  position: absolute;
  top: 30px;
  left: 200px;
  z-index: 1000;

  .honeycomb {
    height: 6px;
    position: relative;
    width: 6px;
  }

  .honeycomb div {
    -webkit-animation: honeycomb 2.1s infinite backwards;
    animation: honeycomb 2.1s infinite backwards;
    background: #f3f3f3;
    height: 6px;
    margin-top: 3px;
    position: absolute;
    width: 12px;
  }

  .honeycomb div:after, .honeycomb div:before {
    content: '';
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    position: absolute;
    left: 0;
    right: 0;
  }

  .honeycomb div:after {
    top: -3px;
    border-bottom: 3px solid #f3f3f3;
  }

  .honeycomb div:before {
    bottom: -3px;
    border-top: 3px solid #f3f3f3;
  }

  .honeycomb div:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    left: -15px;
    top: 0;
  }

  .honeycomb div:nth-child(2) {
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    left: -7.5px;
    top: 12px;
  }

  .honeycomb div:nth-child(3) {
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
    left: 7.5px;
    top: 12px;
  }

  .honeycomb div:nth-child(4) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
    left: 15px;
    top: 0;
  }

  .honeycomb div:nth-child(5) {
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
    left: 7.5px;
    top: -12px;
  }

  .honeycomb div:nth-child(6) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    left: -7.5px;
    top: -12px;
  }

  .honeycomb div:nth-child(7) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
    left: 0;
    top: 0;
  }`;

export default Loader;