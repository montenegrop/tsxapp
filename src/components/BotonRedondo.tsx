import { IonButton } from "@ionic/react";

interface BotonRedondoProps {
  texto: string;
}

const BotonRedondo: React.FC<BotonRedondoProps> = ({ texto }) => {
  return <IonButton shape="round">{texto}</IonButton>;
};

export { BotonRedondo };
