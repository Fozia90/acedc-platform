import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

export default function Scanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📷 Scanner</Text>
      <Ionicons name="qr-code" size={60} color={Colors.gold} />
      <Text style={styles.text}>Scanner QR à venir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  text: {
    fontSize: 14,
    color: Colors.gray,
  },
});