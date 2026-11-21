// ⚠️ IP de ton PC sur le réseau local
const API_URL = 'http://192.168.8.100:8000/api';

export const api = {
  /**
   * Connexion d'un utilisateur
   */
  async login(username, password) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Erreur de connexion');
      }

      return data;
    } catch (error) {
      if (error.message.includes('Network request failed')) {
        throw new Error(
          "Impossible de joindre le serveur. Vérifie que l'API est démarrée."
        );
      }
      throw error;
    }
  },

  /**
   * Récupère les infos de l'utilisateur connecté
   */
  async getMe(token) {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || 'Erreur');
    }

    return data;
  },

  /**
   * Récupère la liste des abonnés
   */
  async getAbonnes(token) {
    const response = await fetch(`${API_URL}/abonnes`, {
      headers: { 'Authorization': `Bearer ${token}` },
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || 'Erreur');
    return data;
  },

  /**
   * Crée un nouvel abonné
   */
  async createAbonne(token, abonneData) {
    const response = await fetch(`${API_URL}/abonnes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(abonneData),
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.detail || 'Erreur');
    return data;
  },
};

export { API_URL };