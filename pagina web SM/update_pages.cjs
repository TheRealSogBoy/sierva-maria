const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
const newComponentsPath = path.join(__dirname, 'new_components.jsx');

let appContent = fs.readFileSync(appPath, 'utf8');
const newComponentsContent = fs.readFileSync(newComponentsPath, 'utf8');

// The new components file has imports at the top. We will just extract the two functions.
const armonizacionStart = newComponentsContent.indexOf('export function ArmonizacionPage');
const laserStart = newComponentsContent.indexOf('export function LaserPage');

const newArmonizacion = newComponentsContent.substring(armonizacionStart, laserStart).replace('export function', 'function');
const newLaser = newComponentsContent.substring(laserStart).replace('export function', 'function');

// Now find the components in App.jsx
const appArmonizacionStart = appContent.indexOf('function ArmonizacionPage({ onNavigate }) {');
const appLaserStart = appContent.indexOf('function LaserPage({ onNavigate }) {');
const appAppStart = appContent.indexOf('export default function App() {');

if (appArmonizacionStart !== -1 && appLaserStart !== -1 && appAppStart !== -1) {
  // Replace everything between appArmonizacionStart and appAppStart
  const before = appContent.substring(0, appArmonizacionStart);
  const after = appContent.substring(appAppStart);

  appContent = before + 
    '// ══════════════════════════════════════════════════════════════════════════════\n' +
    '// VISTA 2: PÁGINA DE ARMONIZACIÓN FACIAL E INYECTABLES (/armonizacion)\n' +
    '// ══════════════════════════════════════════════════════════════════════════════\n' + 
    newArmonizacion + 
    '\n\n// ══════════════════════════════════════════════════════════════════════════════\n' +
    '// VISTA 3: PÁGINA DE DEPILACIÓN LÁSER AVANZADA (/laser)\n' +
    '// ══════════════════════════════════════════════════════════════════════════════\n' + 
    newLaser + 
    '\n\n// ══════════════════════════════════════════════════════════════════════════════\n' +
    '// MAIN APP COMPONENT & ROUTER\n' +
    '// ══════════════════════════════════════════════════════════════════════════════\n' + 
    after;

  fs.writeFileSync(appPath, appContent);
  console.log('App.jsx updated successfully!');
} else {
  console.error('Could not find component boundaries in App.jsx');
}
