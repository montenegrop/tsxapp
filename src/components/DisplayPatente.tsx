import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

import "../pages/Paso1.css";

export const DisplayGrid: React.FC = () => {
  const css = `
    ion-button.only-here-1 {
      --background: #93e9be;
      --background-hover: #9ce0be;
      --background-activated: #88f4be;
      --background-focused: #88f4be;
    
      --color: blue;
    
      --border-radius: 0;
      --border-color: #000;
      --border-style: solid;
      --border-width: 1px;
    
      --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);
    
      --ripple-color: deeppink;
    
      --padding-top: 10px;
      --padding-bottom: 10px;
    }
    `;

  return (
    <div>
      <style>{css}</style>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton className="only-here-1">dsd</IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};
