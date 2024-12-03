import React from 'react';
import { Container } from 'react-bootstrap';
import traducciones from '../helpers/traduccion';
import useLangStore from '../store/langStore';

interface LanguageTexts {
  personalData: string;
  age: string;
  location: string;
  nationality: string;
  languages: string;
  ageValue: string;
  locationValue: string;
  nationalityValue: string;
  languagesValue: string;
}

interface Texts {
  en: LanguageTexts;
  es: LanguageTexts;
}

export const PersonalDate: React.FC = () => {
  // Estado global del idioma desde el store
  const { language, toggleLanguage }: { language: 'en' | 'es'; toggleLanguage: () => void } = useLangStore();

  const texts: Texts = {
    en: {
      personalData: 'Personal Data',
      age: 'Age',
      location: 'Location',
      nationality: 'Nationality',
      languages: 'Languages',
      ageValue: '22',
      locationValue: 'Tucumán, Argentina',
      nationalityValue: 'Argentinian',
      languagesValue: 'English - Spanish',
    },
    es: {
      personalData: 'Datos Personales',
      age: 'Edad',
      location: 'Ubicación',
      nationality: 'Nacionalidad',
      languages: 'Idiomas',
      ageValue: '22',
      locationValue: 'Tucumán, Argentina',
      nationalityValue: 'Argentina',
      languagesValue: 'Inglés - Español',
    },
  };

  return (
    <Container className="text-white p-4 m-3 rounded-3 w-75 mx-auto" data-aos="fade-up">
      <h2 className="text-center text-uppercase mb-4 text-info">
        {traducciones[language].datospersonales}
      </h2>
      <ul className="list-unstyled text-start px-3">
        <li className="mb-2">
          <span className="fw-bold text-info">{traducciones[language].edad}:</span> {texts[language].ageValue}
        </li>
        <li className="mb-2">
          <span className="fw-bold text-info">{traducciones[language].ubicacion}:</span> {texts[language].locationValue}
        </li>
        <li className="mb-2">
          <span className="fw-bold text-info">{traducciones[language].nacionalidad}:</span> {texts[language].nationalityValue}
        </li>
        <li className="mb-2">
          <span className="fw-bold text-info">{traducciones[language].idioma}:</span> {texts[language].languagesValue}
        </li>
      </ul>
      <div className="text-center">
      </div>
    </Container>
  );
};
