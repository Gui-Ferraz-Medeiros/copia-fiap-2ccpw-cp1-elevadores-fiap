# MINHA CÓPIA DE: fiap-2ccpw-cp1-elevadores-fiap por Roberto Moreira
## Atualizações feitas em 22:03

- [x] Estrutura Expo Router (pastas `app/`, `_layout.js`)
- [x] Tela Home `app/index.js` com navegação `Link` para:
  - `app/agendar.js`
  - `app/localizar.js`
- [x] Tela `app/localizar.js` com simulação `useEffect` e loading
- [x] Componente `components/CardElevador.js` (card de elevador com status)
- [x] Correção de import/case (card-elevador -> CardElevador)
- [x] Remoção do `App.js`/`index.js` raiz e configuração de `package.json`:
  - `"main": "expo-router/entry"`
- [x] fix: `Link asChild` e flatten styles para evitar alerta `array de styles` no Expo Router

## Funcionalidades Implementadas

### Simulação de Elevadores
- **8 elevadores** simulados com estados dinâmicos
- **Movimento realista**: 2 segundos por andar
- **Dispatch inteligente**: Prioriza elevador mais próximo, evita chamadas no mesmo andar
- **Chamadas simultâneas**: 1-4 elevadores podem ser despachados ao mesmo tempo
- **Estados visuais**: Parado, Subindo, Descendo, Ocupado

### Barra de Progresso
- **Visual feedback**: Barra animada durante transições de andar
- **Gradiente rosa-verde**: De rosa FIAP (#ED145B) para verde (#00A859)
- **Atualização em tempo real**: Progresso de 0% a 100% a cada 100ms
- **Integração com movimento**: Aparece apenas durante movimento

### Dependências Adicionadas
- `expo-linear-gradient`: Para criar o gradiente na barra de progresso

## Como rodar:
- npm install
- npx expo start -c