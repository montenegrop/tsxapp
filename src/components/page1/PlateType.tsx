import { IonButton } from "@ionic/react";

interface PlateTypeProps {
  texto: string;
  color?: string;
  onAction: any;
}

const PlateType: React.FC<PlateTypeProps> = ({ texto, color, onAction }) => {
  return (
    <IonButton onClick={onAction} color={color} shape="round">
      {texto}
    </IonButton>
  );
};

export { PlateType };
