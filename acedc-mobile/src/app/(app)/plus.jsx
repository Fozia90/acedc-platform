import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../constants/colors';

export default function Plus() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const userStr = await AsyncStorage.getItem('user');
    if (userStr) setUser(JSON.parse(userStr));
  };

  const handleLogout = () => {
    Alert.alert(
      'Déconnexion',
      'Voulez-vous vraiment vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Déconnecter',
          style: 'destructive',
          onPress: async () => {
            await AsyncStorage.clear();
            router.replace('/login');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Profil */}
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.prenom?.[0]}{user?.nom?.[0]}
          </Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>
            {user?.prenom} {user?.nom}
          </Text>
          <Text style={styles.profileRole}>
            {user?.role === 'admin_supreme' ? 'Admin Suprême' : 'Admin'}
          </Text>
          <Text style={styles.profilePhone}>{user?.telephone}</Text>
        </View>
      </View>

      {/* Menu */}
      <View style={styles.menuSection}>
        <MenuItem
          icon="people"
          label="Personnels"
          color={Colors.primary}
          onPress={() => {}}
        />
        <MenuItem
          icon="shield-checkmark"
          label="Gérer les admins"
          color={Colors.gold}
          onPress={() => {}}
          adminOnly
        />
        <MenuItem
          icon="settings"
          label="Paramètres"
          color={Colors.info}
          onPress={() => {}}
        />
        <MenuItem
          icon="information-circle"
          label="À propos"
          color={Colors.gray}
          onPress={() => {}}
        />
      </View>

      {/* Déconnexion */}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Ionicons name="log-out" size={20} color={Colors.danger} />
        <Text style={styles.logoutText}>Déconnexion</Text>
      </TouchableOpacity>

      <Text style={styles.version}>ACEDC v1.0.0</Text>
    </ScrollView>
  );
}

function MenuItem({ icon, label, color, onPress, adminOnly }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={[styles.menuIconBg, { backgroundColor: color + '15' }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <Text style={styles.menuLabel}>{label}</Text>
      <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    gap: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.grayDark,
  },
  profileRole: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: '600',
    marginTop: 2,
  },
  profilePhone: {
    fontSize: 12,
    color: Colors.gray,
    marginTop: 4,
  },
  menuSection: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    gap: 12,
  },
  menuIconBg: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
    color: Colors.grayDark,
  },
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.danger + '30',
  },
  logoutText: {
    color: Colors.danger,
    fontSize: 15,
    fontWeight: '600',
  },
  version: {
    textAlign: 'center',
    color: Colors.gray,
    fontSize: 12,
    marginTop: 24,
  },
});