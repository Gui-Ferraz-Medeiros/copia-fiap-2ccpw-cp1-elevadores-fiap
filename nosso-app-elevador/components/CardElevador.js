import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardElevador({ nome, andares, status, andarAtual }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.subtitulo}>Status: {status}</Text>
        <Text style={styles.andares}>Atende: {andares.join(', ')}</Text>
      </View>
      <View style={styles.andarContainer}>
        <Text style={styles.andarTexto}>{andarAtual}º</Text>
        <Text style={styles.andarLegenda}>Andar Atual</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#ED145B', // Rosa FIAP
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
  },
  andares: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  andarContainer: {
    alignItems: 'center',
  },
  andarTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ED145B',
  },
  andarLegenda: {
    fontSize: 10,
    textTransform: 'uppercase',
  },
});