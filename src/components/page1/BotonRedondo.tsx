import { IonButton } from "@ionic/react";

interface BotonRedondoProps {
  texto: string;
  color?: string;
  onAction: any;
}

const BotonRedondo: React.FC<BotonRedondoProps> = ({
  texto,
  color,
  onAction,
}) => {
  return (
    <IonButton onClick={onAction} color={color} shape="round">
      {texto}
    </IonButton>
  );
};

export { BotonRedondo };
