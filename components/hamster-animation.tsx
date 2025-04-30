'use client';

import React, { useState } from 'react';
import HamsterLoader from './mouse';
import styled from 'styled-components';

const HamsterAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <AnimationWrapper 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={isVisible ? 'visible' : 'hidden'}
    >
      {isHovered && (
        <ToolTip>
          {"Keep Going~".split('').map((char, index) => {
            const angle = (index - ("Keep Going~".length - 1) / 2) * 0.3;
            return (
              <span
                key={index}
                style={{
                  '--char-index': index,
                  '--angle': angle
                } as React.CSSProperties}
              >
                {char}
              </span>
            );
          })}
        </ToolTip>
      )}
      <div className="hamster-container" onClick={toggleVisibility}>
        <HamsterLoader />
      </div>
    </AnimationWrapper>
  );
};

const AnimationWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 1;
  
  &.hidden {
    opacity: 0.3;
  }
  
  &:hover {
    transform: scale(1.05);
  }
  
  /* 调整不同屏幕尺寸下的悬停效果 */
  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.03);
    }
  }
  
  @media (max-width: 480px) {
    &:hover {
      transform: scale(1.02);
    }
  }
  
  .hamster-container {
    position: relative;
    transform-origin: bottom right;
  }
  
  /* 桌面端大屏幕 - 默认尺寸 */
  @media (min-width: 1200px) {
    .wheel-and-hamster {
      font-size: 14px;
    }
  }
  
  /* 平板设备 */
  @media (max-width: 1199px) and (min-width: 769px) {
    bottom: 18px;
    right: 18px;
    
    .wheel-and-hamster {
      font-size: 12px;
    }
  }
  
  /* 手机设备 - 中等尺寸 */
  @media (max-width: 768px) and (min-width: 481px) {
    bottom: 15px;
    right: 15px;
    
    .wheel-and-hamster {
      font-size: 10px;
    }
  }
  
  /* 小型手机设备 */
  @media (max-width: 480px) {
    bottom: 12px;
    right: 12px;
    
    .wheel-and-hamster {
      font-size: 8px;
    }
  }
`;

const ToolTip = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
  background-color: transparent;
  font-size: 14px;
  white-space: nowrap;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  
  span {
    display: inline-block;
    background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    padding: 5px 5px;
    border-radius: 5px;
    opacity: 0;
    transform-origin: center;
    animation: floatChar 1s ease-out forwards;
    animation-delay: calc(var(--char-index) * 0.1s);
    text-shadow: 0 0 10px rgba(99, 102, 241, 0.5),
                0 0 20px rgba(168, 85, 247, 0.3),
                0 0 30px rgba(236, 72, 153, 0.2);
    font-weight: bold;
    font-size: 1.2em;
  }

  @keyframes floatChar {
    0% {
      opacity: 0;
      transform: translate(calc(cos(var(--angle)) * 50px), calc(sin(var(--angle)) * 50px)) scale(0.8) rotate(calc(var(--angle) * -1rad));
    }
    50% {
      opacity: 0.5;
      transform: translate(calc(cos(var(--angle)) * 25px), calc(sin(var(--angle)) * 25px)) scale(0.9) rotate(calc(var(--angle) * -0.5rad));
    }
    100% {
      opacity: 1;
      transform: translate(0, 0) scale(1) rotate(0);
    }
  }
  
  /* 响应式提示框尺寸 */
  @media (max-width: 768px) {
    font-size: 12px;
    @keyframes floatArc {
      0% {
        opacity: 0;
        transform: translate(-50%, 0%) scale(0.8);
      }
      50% {
        opacity: 0.5;
        transform: translate(-50%, -60%) scale(0.9);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -80%) scale(1);
      }
    }
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
    @keyframes floatArc {
      0% {
        opacity: 0;
        transform: translate(-50%, 0%) scale(0.8);
      }
      50% {
        opacity: 0.5;
        transform: translate(-50%, -45%) scale(0.9);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -60%) scale(1);
      }
    }
  }
`;

export default HamsterAnimation;