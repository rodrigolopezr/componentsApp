import React, { useContext } from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';
import { Alert, View } from 'react-native';
import { ShowPromptAdapter } from '../../../config/adaptars/promp.adapter';
import { PromptOptions } from 'react-native-prompt-android';
import { ThemeContext } from '../../context/ThemeContext';

type PromptButton = {
  text?: string;
  onPress?: (message: string) => void;

  /** @platform ios */
  style?: 'default' | 'cancel' | 'destructive';
};

export const AlertScreen = () => {
  const { currentTheme } = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      {
        cancelable: true,
        onDismiss() {
          console.log('dismiss');
        },
        userInterfaceStyle: currentTheme,
      },
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ],
      {
        userInterfaceStyle: currentTheme,
      },
    );

  const showPrompt = () => {
    // Alert.prompt(
    //   'correo electronico',
    //   'prueba descripcion',
    //   (valor: string) => console.log({ valor }),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad',
    // );
    // prompt(
    //   'Enter password',
    //   'Enter your password to claim your $1.5B in lottery winnings',
    //   [
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'OK',
    //       onPress: (password: string) =>
    //         console.log('OK Pressed, password: ' + password),
    //     },
    //   ],
    //   {
    //     type: 'secure-text',
    //     cancelable: false,
    //     defaultValue: 'test',
    //     placeholder: 'placeholder',
    //   },
    // );

    const config = {
      text: 'Enter password',
      message: 'Enter your password to claim your $1.5B in lottery winnings',
      buttons: [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        } as PromptButton,
        {
          text: 'OK',
          onPress: (password: string) =>
            console.log('OK Pressed, password: ' + password),
        } as PromptButton,
      ],
      options: {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      } as PromptOptions,
    };

    ShowPromptAdapter({ ...config });
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />
      <View style={{ height: 10 }} />
      <Button text="Alerta 2 botones" onPress={() => createTwoButtonAlert()} />
      <View style={{ height: 10 }} />
      <Button
        text="Alerta 3 botones"
        onPress={() => createThreeButtonAlert()}
      />
      <View style={{ height: 10 }} />
      <Button text="Prompt - Input" onPress={() => showPrompt()} />
    </CustomView>
  );
};
