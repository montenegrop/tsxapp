import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";

interface DisplayGridProps {
  plateType: string;
  values: string[];
}

export const DisplayGrid: React.FC<DisplayGridProps> = ({
  plateType,
  values,
}) => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          {values.map((value) => (
            <IonButton className="only-here-1">{value}</IonButton>
          ))}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
