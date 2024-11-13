import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
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
  buttonText: string;
}
interface Texts {
  en: LanguageTexts;
  es: LanguageTexts;
}

export const PersonalDate: React.FC = () => {
  // Estado de idioma
  const [language, setLanguage] = useState<'en' | 'es'>('es');

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
      buttonText: 'Switch to Spanish',
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
      buttonText: 'Cambiar a Inglés',
    },
  };


  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <Container className="text-white p-4 m-3  rounded-3 w-75 mx-auto" data-aos="fade-up">
      <h2 className="text-center text-uppercase mb-4">{texts[language].personalData}</h2>
      <ul className="list-unstyled text-start px-3">
        <li className="mb-2">
          <span className="fw-bold text-info">{texts[language].age}:</span> {texts[language].ageValue}
        </li>
        <li className="mb-2">
          <span className="fw-bold text-info">{texts[language].location}:</span> {texts[language].locationValue}
        </li>
        <li className="mb-2">
          <span className="fw-bold text-info">{texts[language].nationality}:</span> {texts[language].nationalityValue}
        </li>
        <li className="mb-2">
          <span className="fw-bold text-info">{texts[language].languages}:</span> {texts[language].languagesValue}
        </li>
      </ul>
      <div className="text-center mt-4">
        <Button variant="dark" onClick={toggleLanguage}>
          {texts[language].buttonText}
        </Button>
      </div>
    </Container>
  );
};
