import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { Link } from 'expo-router';
import CardElevador from '../components/CardElevador';

export default function LocalizarElevador() {
  const [carregando, setCarregando] = useState(true);
  const [elevadores, setElevadores] = useState([]);

  // Função para gerar andares aleatórios (1 a 4 andares únicos entre 1 e 10)
  const gerarAndaresAleatorios = () => {
    const numAndares = Math.floor(Math.random() * 4) + 1; // 1 a 4
    const andares = [];
    while (andares.length < numAndares) {
      const andar = Math.floor(Math.random() * 10) + 1;
      if (!andares.includes(andar)) {
        andares.push(andar);
      }
    }
    return andares.sort((a, b) => a - b);
  };

  // Dados iniciais dos elevadores
  const inicializarElevadores = () => [
    { id: '1', nome: 'Elevador A', andares: gerarAndaresAleatorios(), status: 'Parado', andarAtual: 1, indiceAtual: 0 },
    { id: '2', nome: 'Elevador B', andares: gerarAndaresAleatorios(), status: 'Parado', andarAtual: 1, indiceAtual: 0 },
    { id: '3', nome: 'Elevador C', andares: gerarAndaresAleatorios(), status: 'Parado', andarAtual: 1, indiceAtual: 0 },
  ];

  // Simulação de carregamento de dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setElevadores(inicializarElevadores());
      setCarregando(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Simulação de movimento em tempo real
  useEffect(() => {
    if (!carregando) {
      const interval = setInterval(() => {
        setElevadores(prevElevadores =>
          prevElevadores.map(elevador => {
            const { andares, indiceAtual, andarAtual } = elevador;
            const proximoIndice = (indiceAtual + 1) % andares.length;
            const proximoAndar = andares[proximoIndice];
            const status = proximoAndar > andarAtual ? 'Subindo' : proximoAndar < andarAtual ? 'Descendo' : 'Parado';
            return {
              ...elevador,
              andarAtual: proximoAndar,
              indiceAtual: proximoIndice,
              status,
            };
          })
        );
      }, 3000); // Atualiza a cada 3 segundos

      return () => clearInterval(interval);
    }
  }, [carregando]);

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