import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonItemDivider,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";

interface option {
  value: string;
  name: string;
}

// interfaces:
interface ChooseOrWriteProps {
  manualLabel: string;
  selectLabel: string;
  options: option[];
  onManualChange: any;
  onOpntionSelect: any;
}

export const ChooseOrWrite: React.FC<ChooseOrWriteProps> = ({
  manualLabel,
  selectLabel,
  options,
  onManualChange,
  onOpntionSelect,
}) => {
  return (
    <IonList>
      <IonItem>
        <IonButton shape="round">"sdsd"</IonButton>
      </IonItem>
      <IonItem>
        <IonLabel>{manualLabel}</IonLabel>
        <IonInput
          onIonChange={(e) => onOpntionSelect(e.detail.value!)}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel>Seleccionar:</IonLabel>
        <IonSelect
          interface="action-sheet"
          cancelText="cancelar"
          okText="oktexto"
        >
          {options.map((option) => (
            <IonSelectOption key={option.value} value={option.value}>
              {option.value}
            </IonSelectOption>
          ))}
          <IonSelectOption value="blonde">Blonde</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
};
