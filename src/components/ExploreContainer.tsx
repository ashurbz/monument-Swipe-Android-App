import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <p>
      <strong>Swipe Right If you know</strong>
      <br/>
        
        </p>

        <p>

        <strong>Swipe left If you Dont</strong>
        <br/>

        </p>

        <p>

        <strong>Tap to know About</strong>
        <br/>

</p>


     
    </div>
  );
};

export default ExploreContainer;
