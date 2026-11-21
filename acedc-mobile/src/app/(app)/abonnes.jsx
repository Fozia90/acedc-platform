
import { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '../../constants/colors';
import { api } from '../../lib/api';

export default function Abonnes() {
  const router = useRouter();
  const [abonnes, setAbonnes] = useState([]);
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const loadAbonnes = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) return;
      const data = await api.getAbonnes(token);
      setAbonnes(data);
    } catch (e) {
      console.log('Erreur:', e.message);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadAbonnes();
    }, [loadAbonnes])
  );

  const onRefresh = () => {
    setRefreshing(true);
    loadAbonnes();
    setTimeout(() => setRefreshing(false), 500);
  };

  const filtered = abonnes.filter((a) => {
    const q = search.toLowerCase();
    return (
      a.nom.toLowerCase().includes(q) ||
      a.prenom.toLowerCase().includes(q) ||
      a.telephone.includes(q) ||
      a.adresse.toLowerCase().includes(q)
    );
  });

  const getStatutStyle = (statut) => {
    switch (statut) {
      case 'Actif':
        return { bg: Colors.info, color: Colors.white };
      case 'Bientôt expiré':
        return { bg: Colors.warning, color: Colors.white };
      case 'Expiré':
        return { bg: Colors.danger, color: Colors.white };
      default:
        return { bg: Colors.gray, color: Colors.white };
    }
  };

  const renderItem = ({ item }) => {
    const statutStyle = getStatutStyle(item.statut);
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        onPress={() => router.push(`/(app)/abonnes/${item.id}`)}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.cardName}>
            {item.nom} {item.prenom}
          </Text>
          <View style={[styles.statutBadge, { backgroundColor: statutStyle.bg }]}>
            <Text style={[styles.statutText, { color: statutStyle.color }]}>
              {item.statut}
            </Text>
          </View>
        </View>

        <View style={styles.cardInfo}>
          <Ionicons name="call" size={14} color={Colors.gray} />
          <Text style={styles.cardText}>{item.telephone}</Text>
        </View>

        <View style={styles.cardInfo}>
          <Ionicons name="location" size={14} color={Colors.gray} />
          <Text style={styles.cardText}>{item.adresse}</Text>
        </View>

        <View style={styles.cardFooter}>
          <View style={styles.badgeRow}>
            <View style={styles.montantBadge}>
              <Ionicons name="cash" size={12} color={Colors.gold} />
              <Text style={styles.montantText}>
                {item.montant.toLocaleString()} FC
              </Text>
            </View>

            <View style={styles.freqBadge}>
              <Ionicons name="repeat" size={12} color={Colors.primary} />
              <Text style={styles.freqText}>{item.frequence}x/sem</Text>
            </View>
          </View>

          <Text style={styles.dateText}>
            Exp: {item.date_expiration}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>👥 Abonnés</Text>
        <Text style={styles.count}>{filtered.length} au total</Text>
      </View>

      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color={Colors.gray} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un abonné..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch('')}>
            <Ionicons name="close-circle" size={18} color={Colors.gray} />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Colors.primary]}
          />
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="people-outline" size={60} color={Colors.gray} />
            <Text style={styles.emptyText}>Aucun abonné trouvé</Text>
            <Text style={styles.emptyHint}>
              Cliquez sur + pour ajouter votre premier abonné
            </Text>
          </View>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push('/(app)/abonnes/nouveau')}
        activeOpacity={0.8}
      >
        <Ionicons name="add" size={28} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  count: {
    fontSize: 13,
    color: Colors.white + 'cc',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    margin: 16,
    paddingHorizontal: 14,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.black,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.grayDark,
    flex: 1,
  },
  statutBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statutText: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  cardText: {
    fontSize: 13,
    color: Colors.gray,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 8,
  },
  montantBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.gold + '15',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  montantText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.goldDark,
  },
  freqBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: Colors.primary + '15',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  freqText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.primary,
  },
  dateText: {
    fontSize: 11,
    color: Colors.gray,
  },
  empty: {
    alignItems: 'center',
    padding: 40,
    gap: 12,
  },
  emptyText: {
    fontSize: 15,
    color: Colors.gray,
    fontWeight: '600',
  },
  emptyHint: {
    fontSize: 13,
    color: Colors.gray,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
});