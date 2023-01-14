import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

interface PlateButtonsProps {
  buttons: string;
}

export const PlateButtons: React.FC<PlateButtonsProps> = ({ buttons }) => {
  return (
    <IonGrid>
      <IonRow>
        {buttons.split("").map((letter) => (
          <IonCol key={letter}>
            <IonButton size="large">{letter}</IonButton>
          </IonCol>
        ))}
        <IonCol>
          <IonButton size="large">last</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
