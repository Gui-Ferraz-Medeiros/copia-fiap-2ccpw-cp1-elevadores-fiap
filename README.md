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

## Como rodar:
- npm install
- npx expo start -c