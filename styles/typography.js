import { StyleSheet } from 'react-native';

const typography = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  heading2: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  caption: {
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default typography;