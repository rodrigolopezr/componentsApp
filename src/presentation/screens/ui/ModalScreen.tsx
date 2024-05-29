import React, { useState } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Modal, Platform, View } from 'react-native';
import { Button } from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView>
      <Title text="Modal" safe />

      <Button text="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)' }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Title text="Contenido" safe />
          </View>
          <View style={{ flex: 1 }} />

          <Button
            text="Cerrar Modal"
            onPress={() => setIsVisible(false)}
            styles={{ height: Platform.OS === 'android' ? 40 : 100 }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
