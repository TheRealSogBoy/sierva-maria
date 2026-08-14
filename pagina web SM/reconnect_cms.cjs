const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf8');

// 1. Inject usePrices into ArmonizacionPage
content = content.replaceAll(
  'function ArmonizacionPage({ onNavigate }) {',
  'function ArmonizacionPage({ onNavigate }) {\n  const { getPrice } = usePrices();'
);

// 2. Inject usePrices into LaserPage
content = content.replaceAll(
  'function LaserPage({ onNavigate }) {',
  'function LaserPage({ onNavigate }) {\n  const { getPrice } = usePrices();'
);

// 3. Update Fetch URL in App component
const oldFetch = "fetch('https://script.google.com/macros/s/AKfycbzlkXK-cehnWhrfMrcu5R6zmpzHCNgpiZ2yCydCYf8kfAu1tYTB-pu0Q7XI7e8UVeNT/exec')";
const newFetch = "fetch(`https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnS6H1l8B150crNkdBZZFy3qCE_dLpHty0KMydCmhjOWLL6RsuU6cfKASiSN_tbMzyTNMmF8ZT1I_LgQd5kEZ-XjBYsxV_x67U4mLy8BuCNOqRnCfJZ937P6QGnC6xVbfEKsVWR1fbSJ4-66EgLSxvlNYmO5qiwRQ8cbnFngh-OnrmhmHpWQ0OcNLZgJ2isx-Otj7nP1rWLSdmTAkVcOmqhuEbSbYIUaV09UMcatAiAMi98-DaFW7oKjzUp0Szt6hpplUIm8J0Sh1vyJmU4jpHhnBP1kYg&lib=MrZ57dsGJina9QcVtix2-FYkXBSdOl3WC&t=${new Date().getTime()}`)";
content = content.replaceAll(oldFetch, newFetch);

// 4. Update the dictionary to also map by Servicio name (so it matches UI better)
content = content.replaceAll(
  'newPrices[item.ID] = formattedPrice;',
  'newPrices[item.ID] = formattedPrice;\n              if (item.Servicio) newPrices[item.Servicio] = formattedPrice;'
);

// 5. Replace Static Prices in ArmonizacionPage
// A. Limpiezas
content = content.replaceAll(
  '<div className="font-serif text-4xl font-bold text-[#C4A882]">$50.000</div>',
  '<div className="font-serif text-4xl font-bold text-[#C4A882]">{getPrice(\'Limpieza Facial Basic\', \'$50.000\')}</div>'
);
content = content.replaceAll(
  '<div className="font-serif text-4xl font-bold text-[#C4A882]">$100.000</div>',
  '<div className="font-serif text-4xl font-bold text-[#C4A882]">{getPrice(\'Limpieza Facial Premium\', \'$100.000\')}</div>'
);
content = content.replaceAll(
  '<div className="font-serif text-4xl font-bold text-[#C4A882]">$200.000</div>',
  '<div className="font-serif text-4xl font-bold text-[#C4A882]">{getPrice(\'Plasma Facial (Solo)\', \'$200.000\')}</div>'
);

// B. Procedimientos Individuales (Base)
// The items are mapped, so we need to inject getPrice inside the map function.
content = content.replaceAll(
  '<td className="py-5 px-8 font-bold text-[#C4A882] text-right whitespace-nowrap text-lg">\n                      {item.price}\n                    </td>',
  '<td className="py-5 px-8 font-bold text-[#C4A882] text-right whitespace-nowrap text-lg">\n                      {getPrice(item.name, item.price)}\n                    </td>'
);

// C. Combos Premium (Combos Básicos, Full Face)
content = content.replaceAll(
  '<div className="font-bold text-[#C4A882] text-xl">{c.price}</div>',
  '<div className="font-bold text-[#C4A882] text-xl">{getPrice(c.name, c.price)}</div>'
);
content = content.replaceAll(
  '<div className="font-bold text-[#C4A882] text-xl">{c.price}</div>',
  '<div className="font-bold text-[#C4A882] text-xl">{getPrice(c.name, c.price)}</div>'
); // do it twice because there are two such blocks in ArmonizacionPage

// Profhilo, Sculptra, Harmonyca grids
content = content.replaceAll(
  '<div className="font-serif text-2xl font-bold text-[#C4A882]">{item.price}</div>',
  '<div className="font-serif text-2xl font-bold text-[#C4A882]">{getPrice(item.name, item.price)}</div>'
);

// 6. Replace Static Prices in LaserPage
// Precios por Zona
content = content.replaceAll(
  '<div className="font-bold text-[#C4A882] text-right text-lg">{item.p}</div>',
  '<div className="font-bold text-[#C4A882] text-right text-lg">{getPrice(item.z, item.p)}</div>'
);

// Super Combo Plus
content = content.replaceAll(
  '<div className="font-serif text-5xl md:text-6xl font-bold mb-4">$1.000.000</div>',
  '<div className="font-serif text-5xl md:text-6xl font-bold mb-4">{getPrice(\'Super Combo Plus\', \'$1.000.000\')}</div>'
);

// Paquetes 6 Sesiones Grid
content = content.replaceAll(
  '<div className="font-serif text-4xl font-bold text-[#C4A882]">{item.p}</div>',
  '<div className="font-serif text-4xl font-bold text-[#C4A882]">{getPrice(item.z, item.p)}</div>'
);

fs.writeFileSync(appPath, content);
console.log('App.jsx successfully patched with CMS connections!');
