import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

export const DisplayGrid: React.FC = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonButton className="only-here-1">dsd</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
