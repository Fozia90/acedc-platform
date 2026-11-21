import { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    // Redirection vers login après 3 secondes
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo dans un cercle blanc */}
        <View style={styles.logoCircle}>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Titre */}
        <Text style={styles.title}>ACEDC</Text>
        <Text style={styles.subtitle}>Gestion des abonnements</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Chargement...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
  },
  logoCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: Colors.gold,
    letterSpacing: 3,
  },
  subtitle: {
    fontSize: 16,
    color: '#ffffffcc',
    marginTop: 8,
    letterSpacing: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffffaa',
    fontSize: 14,
    letterSpacing: 1,
  },
});