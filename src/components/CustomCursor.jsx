import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={40}
      color="59, 130, 246"  // Vibrant blue
      outerAlpha={0.2}
      innerScale={0.6}
      outerScale={1.4}
      hasBlendMode={true}
      trailingSpeed={6}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        'img',
        '[role="button"]',
        '.custom-cursor-target'
      ]}
      outerStyle={{
        border: '3px solid rgba(59, 130, 246, 0.8)',
        background: 'transparent',
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)',
        mixBlendMode: 'screen',
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out',
        pointerEvents: 'none'
      }}
      innerStyle={{
        backgroundColor: 'rgba(59, 130, 246, 1)',
        boxShadow: '0 0 15px rgba(59, 130, 246, 1), 0 0 25px rgba(59, 130, 246, 0.6), 0 0 35px rgba(59, 130, 246, 0.3)',
        mixBlendMode: 'screen',
        transition: 'transform 0.15s ease-out',
        pointerEvents: 'none'
      }}
    />
  );
};

export default CustomCursor;