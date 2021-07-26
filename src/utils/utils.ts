import { getNumberFormatSettings } from "react-native-localize";

export function toFixedLocale(value: number, numDigits: number) {
  const standardFixedString = value.toFixed(numDigits);

  const { decimalSeparator } = getNumberFormatSettings();

  if (decimalSeparator === ",") {
    return standardFixedString.replace(".", ",");
  } else {
    return standardFixedString; // Locale matches JavaScript default
  }
}