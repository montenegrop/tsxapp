import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

interface PlateButtonsProps {
  buttons: string;
  onAction: any;
  hidden: boolean;
}

export const PlateButtons: React.FC<PlateButtonsProps> = ({
  buttons,
  onAction,
  hidden,
}) => {
  return (
    <IonGrid hidden={hidden}>
      <IonRow>
        {buttons.split("").map((letter) => (
          <IonCol key={letter}>
            <IonButton onClick={() => onAction(letter)} size="large">
              {letter}
            </IonButton>
          </IonCol>
        ))}
        <IonCol>
          <IonButton size="large">last</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
