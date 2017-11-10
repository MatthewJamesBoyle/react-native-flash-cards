import { Alert } from 'react-native';

export const showAlert = (title, message, CancelText) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: CancelText,
      },
    ],
    { cancelable: false },
  );
};
