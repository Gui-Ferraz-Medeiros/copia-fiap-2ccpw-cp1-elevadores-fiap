import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { Link } from 'expo-router';
import CardElevador from '../components/CardElevador';

export default function LocalizarElevador() {
  const [carregando, setCarregando] = useState(true);
  const [elevadores, setElevadores] = useState([]);

  // Dados fictícios para simular os elevadores da FIAP
  const DATA = [
    { id: '1', nome: 'Elevador A', andares: [1, 2, 4, 8], status: 'Subindo', andarAtual: 3 },
    { id: '2', nome: 'Elevador B', andares: [6, 7, 9], status: 'Parado', andarAtual: 10 },
    { id: '3', nome: 'Elevador C', andares: [1, 3, 5, 7, 9], status: 'Descendo', andarAtual: 2 },
  ];

  // Simulação de carregamento de dados (Requisito: useEffect)
  useEffect(() => {
    const timer = setTimeout(() => {
      setElevadores(DATA);
      setCarregando(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Cabeçalho com Logo (Requisito: Image) */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Localizar Elevador</Text>
      </View>

      <ScrollView style={styles.conteudo}>
        {carregando ? (
          // Feedback Visual de Carregamento
          <View style={styles.centro}>
            <Text style={styles.feedback}>Buscando elevadores próximos...</Text>
          </View>
        ) : (
          <FlatList
            data={elevadores}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardElevador nome={item.nome} andares={item.andares} status={item.status} andarAtual={item.andarAtual} />
            )}
            ListEmptyComponent={<Text>Nenhum elevador operando agora.</Text>}
          />
        )}
      </ScrollView>

      {/* Navegação (Requisito: Expo Router) */}
      <View style={styles.footer}>
        <Link href="/" asChild>
          <TouchableOpacity style={styles.botaoVoltar}>
            <Text style={styles.textoBotao}>Voltar para Home</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#ED145B',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 22,
    color: '#FFF',
    fontWeight: 'bold',
  },
  conteudo: {
    padding: 20,
  },
  centro: {
    marginTop: 50,
    alignItems: 'center',
  },
  feedback: {
    fontSize: 16,
    color: '#ED145B',
    fontStyle: 'italic',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  botaoVoltar: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});