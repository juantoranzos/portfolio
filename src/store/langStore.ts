import {create} from 'zustand';

const useLangStore = create((set) => ({
    language: 'es',
    setLanguage: (lang:any) => set({ language: lang }),
  }));
  
  export default useLangStore