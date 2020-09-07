import React, { useState } from 'react';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonContent,
  IonLabel,
  IonCard,
  IonCardContent,
  IonButton
 
} from '@ionic/react';



import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import  data  from '../data/monuments';
import Com  from "../components/ExploreContainer"

var Swipeable =  require("react-swipy")

let style={};



let Score=0;
let attempts=0;
const App: React.FC = () => {  
  const [cards, setCards]= useState(data);
  

  function addCards () {
    let updateCard = cards;
    let random = data[Math.floor(Math.random() * data.length)];
    updateCard.push(random);
    setCards(updateCard)
    console.log(cards)
  }
  
  function AfterSwipe () {
    if(attempts>10){
     if(Score>50)
     setCards([{
       name:`Congo!!!!!!! Your Score is ${Score}`,
       img:"https://dx5683gi1tv0w.cloudfront.net/dtrjyhj9q/image/upload/w_1080,h_1080,c_pad,b_auto/s3/img0be16e8d8",
       info:"score"
     }])

     else{
      setCards([{
        name:`Better Luck Next Time!!! Your Score is ${Score}`,
        img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3e3ea4c-8a14-4941-943b-080da283982c/d3kqnvk-ef2d4985-1f31-4420-846f-6267a411299e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZjNlM2VhNGMtOGExNC00OTQxLTk0M2ItMDgwZGEyODM5ODJjXC9kM2txbnZrLWVmMmQ0OTg1LTFmMzEtNDQyMC04NDZmLTYyNjdhNDExMjk5ZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.EJXDOJFDZEgC8fH4PnkVY88aTCMN2A5ERTMsW2j3t9I"
    ,info:"score"  }])

     }

   return;
     
    }
   
    addCards()
    setCards(cards.slice(1, cards.length));
  }
  
  function Swipe(dir:any){
    style={}
    attempts=attempts+1;
      if(dir==="left"&&attempts<10)
                      {
                            Score=Score+0;
                      }
        else if(attempts<10){
          Score=Score+10;

          console.log(Score)
          console.log(attempts)
      }
  }

  function  replay() {
      setCards(data);
      attempts=0;
      Score=0;
      console.log("dsad")
  }
  
  
  function abc(){
    
   style={
    animation:"flipInX",
    animationDuration:"2s" 
   };
   if(cards[0].info!="")
   setCards([{
     img:"assets/images/download.png",
     info:"",
     name:cards[0].info

   }]);
   

    console.log("re") 
    
    
    
    

    
  }

  return (
    <div id='app'>
      
        <IonApp style={{backgroundColor:"white"}}>
          <IonContent  >
            <IonHeader>
              <IonToolbar  style={{ textAlign:"center"}} >
              <p >
                  
                  <strong>Monuments App</strong>
              </p>
              </IonToolbar>
            </IonHeader>
            <div>
              <Swipeable onSwipe={Swipe}
            
                onAfterSwipe={AfterSwipe}
                
              >
                <IonCard key={cards[0].name} style={style}  onClick={abc}  >
                  <IonCardContent>


                    <img src={cards[0].img} alt={cards[0].info} />
                  
                    <IonLabel><b>{cards[0].name}</b></IonLabel>
                  </IonCardContent>
                </IonCard>
              </Swipeable>
            </div>

           
          </IonContent>
       
          <Com />
          <IonButton onClick={replay} expand="full">
              
              
              Play Again</IonButton>

              
                
              
          
         
         

        </IonApp>
       
      </div>
  );
}

export default App;
