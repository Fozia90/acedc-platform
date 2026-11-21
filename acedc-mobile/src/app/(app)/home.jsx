import { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../constants/colors';
import { api } from '../../lib/api';

export default function Accueil() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [abonnes, setAbonnes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      const userStr = await AsyncStorage.getItem('user');
      if (userStr) setUser(JSON.parse(userStr));

      const token = await AsyncStorage.getItem('token');
      if (token) {
        const data = await api.getAbonnes(token);
        setAbonnes(data);
      }
    } catch (e) {
      console.log('Erreur loadData:', e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [loadData])
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  // Calcul des stats (sans solde)
  const totalAbonnes = abonnes.length;
  const expirants = abonnes.filter((a) => a.statut === 'Bientôt expiré').length;
  const expires = abonnes.filter((a) => a.statut === 'Expiré').length;
  const actifs = abonnes.filter((a) => a.statut === 'Actif').length;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* En-tête salutation */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Bonjour 👋</Text>
          <Text style={styles.userName}>
            {user?.prenom} {user?.nom}
          </Text>
          <View style={styles.roleBadge}>
            <Ionicons
              name={user?.role === 'admin_supreme' ? 'shield-checkmark' : 'shield'}
              size={12}
              color={Colors.gold}
            />
            <Text style={styles.roleText}>
              {user?.role === 'admin_supreme' ? 'Admin Suprême' : 'Admin'}
            </Text>
          </View>
        </View>
      </View>

      {/* Cartes stats (3 cartes au lieu de 4) */}
      <View style={styles.statsGrid}>
        <StatCard
          icon="people"
          value={totalAbonnes.toString()}
          label="Abonnés"
          color={Colors.primary}
        />
        <StatCard
          icon="checkmark-circle"
          value={actifs.toString()}
          label="Actifs"
          color={Colors.info}
        />
        <StatCard
          icon="alert-circle"
          value={expirants.toString()}
          label="Expirant"
          color={Colors.warning}
        />
      </View>

      {/* Statut rapide */}
      <View style={styles.statusRow}>
        <View style={styles.statusItem}>
          <View style={[styles.statusDot, { backgroundColor: Colors.info }]} />
          <Text style={styles.statusLabel}>Actifs: {actifs}</Text>
        </View>
        <View style={styles.statusItem}>
          <View style={[styles.statusDot, { backgroundColor: Colors.warning }]} />
          <Text style={styles.statusLabel}>Bientôt: {expirants}</Text>
        </View>
        <View style={styles.statusItem}>
          <View style={[styles.statusDot, { backgroundColor: Colors.danger }]} />
          <Text style={styles.statusLabel}>Expirés: {expires}</Text>
        </View>
      </View>

      {/* Actions rapides */}
      <Text style={styles.sectionTitle}>Actions rapides</Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: Colors.primary }]}
          onPress={() => router.push('/(app)/abonnes/nouveau')}
        >
          <Ionicons name="add-circle" size={24} color={Colors.white} />
          <Text style={styles.actionText}>Ajouter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionBtn, { backgroundColor: Colors.gold }]}
          onPress={() => router.push('/(app)/scanner')}
        >
          <Ionicons name="qr-code" size={24} color={Colors.white} />
          <Text style={styles.actionText}>Scanner</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des expirants */}
      {expirants > 0 && (
        <>
          <Text style={styles.sectionTitle}>⚠️ Expirant bientôt</Text>
          {abonnes
            .filter((a) => a.statut === 'Bientôt expiré')
            .slice(0, 3)
            .map((a) => (
              <TouchableOpacity
                key={a.id}
                style={styles.expirantCard}
                onPress={() => router.push(`/(app)/abonnes/${a.id}`)}
              >
                <View style={styles.expirantInfo}>
                  <Text style={styles.expirantName}>
                    {a.nom} {a.prenom}
                  </Text>
                  <Text style={styles.expirantDetail}>
                    {a.jours_restants} jour(s) restant(s)
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.gray} />
              </TouchableOpacity>
            ))}
        </>
      )}
    </ScrollView>
  );
}

function StatCard({ icon, value, label, color }) {
  return (
    <View style={styles.statCard}>
      <View style={[styles.statIconBg, { backgroundColor: color + '20' }]}>
        <Ionicons name={icon} size={20} color={color} />
      </View>
      <Text style={[styles.statValue, { color }]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
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
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 16,
    color: Colors.gray,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 4,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.primary + '15',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  roleText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.primary,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statIconBg: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 11,
    color: Colors.gray,
    marginTop: 2,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  statusLabel: {
    fontSize: 12,
    color: Colors.grayDark,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.grayDark,
    marginBottom: 12,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 12,
  },
  actionText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: '600',
  },
  expirantCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: Colors.warning,
  },
  expirantInfo: {
    flex: 1,
  },
  expirantName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.grayDark,
  },
  expirantDetail: {
    fontSize: 12,
    color: Colors.warning,
    marginTop: 2,
    fontWeight: '600',
  },
});