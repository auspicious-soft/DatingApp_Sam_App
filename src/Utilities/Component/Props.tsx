interface CommonInputProps {
  placeholder: string;
  multiline?: boolean;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: Function;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
}

interface SizeBoxProps {
  size: number;
}
interface LoaderProps {
  isVisible?: boolean;
}
interface LoaderSplashProps {
  isVisible?: boolean;
}
