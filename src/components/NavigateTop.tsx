import { IonButton } from "@ionic/react";

interface NavigateTopProps {
  texto: string;
  color?: string;
}

const NavigateTop: React.FC<NavigateTopProps> = ({ texto, color }) => {
  return (
    <IonButton color={color} shape="round">
      {texto}
    </IonButton>
  );
};

export { NavigateTop };
