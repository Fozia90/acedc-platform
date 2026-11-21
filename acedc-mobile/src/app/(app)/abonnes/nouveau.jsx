import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../constants/colors';
import { api } from '../../../lib/api'; 

export default function NouvelAbonne() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Champs du formulaire
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [sexe, setSexe] = useState('Homme');
  const [montant, setMontant] = useState('');

  // ✅ NOUVEAU : Fréquence
  const [frequence, setFrequence] = useState('2');  // défaut : 2

  const [dateInscription, setDateInscription] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
  // Validations
  if (!nom.trim() || !prenom.trim() || !telephone.trim() || !adresse.trim()) {
    Alert.alert('Erreur', 'Veuillez remplir tous les champs obligatoires');
    return;
  }
  if (!montant || isNaN(parseInt(montant))) {
    Alert.alert('Erreur', 'Montant invalide');
    return;
  }
  if (!password.trim()) {
    Alert.alert('Erreur', 'Le mot de passe admin est requis');
    return;
  }

  setLoading(true);

  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      Alert.alert('Erreur', 'Session expirée, reconnectez-vous');
      return;
    }

    const payload = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      telephone: telephone.trim(),
      adresse: adresse.trim(),
      sexe,
      montant: parseInt(montant),
      frequence: parseInt(frequence),
      date_inscription: dateInscription,
      password: password.trim(),
    };

    const result = await api.createAbonne(token, payload);

    Alert.alert(
      '✅ Succès',
      result.message || 'Abonné ajouté avec succès !',
      [
        {
          text: 'OK',
          onPress: () => router.back(),
        },
      ]
    );
  } catch (error) {
    Alert.alert('Erreur', error.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header avec bouton retour */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color={Colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nouvel abonné</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        {/* Info */}
        <View style={styles.infoBox}>
          <Ionicons name="information-circle" size={20} color={Colors.info} />
          <Text style={styles.infoText}>
            Tous les champs marqués * sont obligatoires
          </Text>
        </View>

        {/* Nom */}
        <Text style={styles.label}>Nom *</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez le nom"
          placeholderTextColor="#999"
          value={nom}
          onChangeText={setNom}
          autoCapitalize="characters"
        />

        {/* Prénom */}
        <Text style={styles.label}>Prénom *</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez le prénom"
          placeholderTextColor="#999"
          value={prenom}
          onChangeText={setPrenom}
          autoCapitalize="characters"
        />

        {/* Téléphone */}
        <Text style={styles.label}>Téléphone *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 0841351095"
          placeholderTextColor="#999"
          value={telephone}
          onChangeText={setTelephone}
          keyboardType="phone-pad"
        />

        {/* Adresse */}
        <Text style={styles.label}>Adresse *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: AV. Boeing N°2"
          placeholderTextColor="#999"
          value={adresse}
          onChangeText={setAdresse}
        />

        {/* Sexe */}
        <Text style={styles.label}>Sexe *</Text>
        <View style={styles.sexeContainer}>
          {['Homme', 'Femme'].map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.sexeBtn,
                sexe === option && styles.sexeBtnActive,
              ]}
              onPress={() => setSexe(option)}
            >
              <Ionicons
                name={option === 'Homme' ? 'male' : 'female'}
                size={20}
                color={sexe === option ? Colors.white : Colors.gray}
              />
              <Text
                style={[
                  styles.sexeText,
                  sexe === option && styles.sexeTextActive,
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Montant */}
        <Text style={styles.label}>Montant (FC) *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 11000"
          placeholderTextColor="#999"
          value={montant}
          onChangeText={setMontant}
          keyboardType="numeric"
        />

        {/* ✅ FRÉQUENCE (NOUVEAU) */}
        <Text style={styles.label}>Fréquence par semaine *</Text>
        <View style={styles.frequenceContainer}>
          {['1', '2', '3', '4', '5'].map((f) => (
            <TouchableOpacity
              key={f}
              style={[
                styles.freqBtn,
                frequence === f && styles.freqBtnActive,
              ]}
              onPress={() => setFrequence(f)}
            >
              <Text
                style={[
                  styles.freqText,
                  frequence === f && styles.freqTextActive,
                ]}
              >
                {f}x
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.hint}>
          💡 Nombre de passages de collecte par semaine
        </Text>

        {/* Date d'inscription */}
        <Text style={styles.label}>Date d'inscription</Text>
        <TextInput
          style={styles.input}
          placeholder="YYYY-MM-DD"
          placeholderTextColor="#999"
          value={dateInscription}
          onChangeText={setDateInscription}
        />

        {/* Mot de passe admin */}
        <Text style={styles.label}>Mot de passe admin *</Text>
        <TextInput
          style={styles.input}
          placeholder="Entrez le mot de passe"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Boutons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelBtn]}
            onPress={() => router.back()}
            disabled={loading}
          >
            <Ionicons name="close" size={20} color={Colors.white} />
            <Text style={styles.buttonText}>Annuler</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.submitBtn]}
            onPress={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color={Colors.white} />
            ) : (
              <>
                <Ionicons name="checkmark" size={20} color={Colors.white} />
                <Text style={styles.buttonText}>Enregistrer</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.info + '15',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: Colors.grayDark,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.grayDark,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: Colors.black,
  },
  sexeContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  sexeBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sexeBtnActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  sexeText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.gray,
  },
  sexeTextActive: {
    color: Colors.white,
  },
  // ✅ Fréquence
  frequenceContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  freqBtn: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  freqBtnActive: {
    backgroundColor: Colors.gold,
    borderColor: Colors.gold,
  },
  freqText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray,
  },
  freqTextActive: {
    color: Colors.white,
  },
  hint: {
    fontSize: 12,
    color: Colors.gray,
    marginTop: 6,
    fontStyle: 'italic',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 15,
    borderRadius: 12,
  },
  cancelBtn: {
    backgroundColor: Colors.danger,
  },
  submitBtn: {
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
});