import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function Agendar() {
  const [carregando, setCarregando] = useState(true);
      // amarzenamento de informações que mudam durante o uso da tela
  const [andar, setAndar] = useState(null);
  const [horario, setHorario] = useState('');
  const [elevador, setElevador] = useState(null);
  const [mensagem, setMensagem] = useState('Escolha um andar e horário');
    // simular carregamento inicial 
  useEffect(() => {
    setTimeout(() => {
      setCarregando(false);
    }, 2000);
  }, []);

  const elevadores = [
    { id: 'A', ocupado: false },
    { id: 'B', ocupado: false },
    { id: 'C', ocupado: true },
    { id: 'D', ocupado: false },
    { id: 'E', ocupado: false },
    { id: 'F', ocupado: true },
    { id: 'G', ocupado: false },
    { id: 'H', ocupado: false },
  ];

  useEffect(() => {
    if (elevador) {
      setMensagem(`Elevador ${elevador} agendado!`);
    }
  }, [elevador]);
  
  const agendarElevador = () => {
    if (!andar || !horario) {
      setMensagem('Escolha um andar e horário');
      return;
    }

    const livres = elevadores.filter(e => !e.ocupado);

    if (livres.length === 0) {
      setMensagem('Nenhum elevador disponível');
      return;
    }

    const escolhido = livres[Math.floor(Math.random() * livres.length)];
    setElevador(escolhido.id);
  };

  // tela de carregamento 
  if (carregando) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>
          Tela de Agendamento (Em construção)
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}> Agendar Elevador</Text>

      {/* ANDARES */}
      <Text style={styles.label}>Escolha o andar:</Text>

      <View style={styles.andares}>
        {[1,2,3,4,5,6,7,8].map(num => (
          <TouchableOpacity
            key={num}
            style={[
              styles.botaoAndar,
              andar === num && styles.botaoSelecionado
            ]}
            onPress={() => setAndar(num)}
          >
            <Text style={[
              styles.textoAndar,
              andar === num && styles.textoSelecionado
            ]}>
              {num}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* horario */}
      <Text style={styles.label}>Digite o horário:</Text>

      <TextInput
        style={styles.input}
        placeholder="Ex: 14:30"
        value={horario}
        onChangeText={setHorario}
      />

      {/* botão */}
      <TouchableOpacity style={styles.botaoAgendar} onPress={agendarElevador}>
        <Text style={styles.textoBotao}>Agendar</Text>
      </TouchableOpacity>

    
      <Text style={styles.mensagem}>{mensagem}</Text>


      {elevador && (
        <Text style={styles.resultado}>
          Elevador {elevador} → Andar {andar} às {horario}
        </Text>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },

  andares: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  botaoAndar: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    minWidth: 45,
    alignItems: 'center',
  },

  botaoSelecionado: {
    backgroundColor: '#E91E63',
  },

  textoAndar: {
    fontWeight: 'bold',
    color: '#333',
  },

  textoSelecionado: {
    color: '#fff',
  },

  input: {
    backgroundColor: '#eaeaea',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  botaoAgendar: {
    backgroundColor: '#E91E63',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  mensagem: {
    marginTop: 15,
    textAlign: 'center',
    color: '#666',
  },

  resultado: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    fontSize: 18,
  },
});
