import { create } from 'zustand';

// Define los tipos para el store
type LangStore = {
  language: 'es' | 'en'; // Solo permite valores válidos
  setLanguage: (lang: 'es' | 'en') => void; // Función para cambiar el idioma
};

// Crea el store con los tipos definidos
const useLangStore = create<LangStore>((set) => ({
  language: 'es', // Idioma predeterminado
  setLanguage: (lang) => set({ language: lang }), // Actualiza el idioma
}));

export default useLangStore;
