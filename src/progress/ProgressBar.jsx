import React, { useEffect, useState } from 'react';

const ProgressBar = ({ progress, color }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setAnimatedProgress(progress);  
    }, 100);

    let start = 0;
    const step = progress / 100; 
    const interval = setInterval(() => {
      start += step;
      if (start >= progress) {
        clearInterval(interval);  
        setDisplayProgress(progress);
      } else {
        setDisplayProgress(Math.floor(start));  
      }
    }, 10); 

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [progress]);

  const styleobj = {
    width: `${animatedProgress}%`,
    backgroundColor: color || 'lightgreen',
    height: 30,
    borderRadius: 10,
    transition: 'width 1s linear',  
  };

  return (
    <div className="contain" style={{ width: '70%', marginTop: '40px' }}>
      <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
        <div style={styleobj}>
          {`${displayProgress}%`}  
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
