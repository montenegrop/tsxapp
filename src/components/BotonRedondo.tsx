import { IonButton } from "@ionic/react";

interface BotonRedondoProps {
  texto: string;
  color?: string;
}

const BotonRedondo: React.FC<BotonRedondoProps> = ({ texto, color }) => {
  return (
    <IonButton className="text-center" color={color} shape="round">
      {texto}
    </IonButton>
  );
};

export { BotonRedondo };
