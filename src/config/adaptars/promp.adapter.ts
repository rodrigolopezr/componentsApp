import prompt, { PromptOptions } from 'react-native-prompt-android';

type PromptButton = {
  text?: string;
  onPress?: (message: string) => void;

  /** @platform ios */
  style?: 'default' | 'cancel' | 'destructive';
};

interface Props {
  text: string;
  message: string;
  buttons: PromptButton[];
  options?: PromptOptions;
}

export const ShowPromptAdapter = ({
  text,
  message,
  buttons,
  options,
}: Props) => {
  prompt(text, message, buttons, options);
};
