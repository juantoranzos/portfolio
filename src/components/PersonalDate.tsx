import React from 'react';
import { Container } from 'react-bootstrap';
import useLangStore from '../store/langStore';

const traducciones = {
  en: {
    datospersonales: 'Personal Data',
    edad: 'Age',
    ubicacion: 'Location',
    nacionalidad: 'Nationality',
    idioma: 'Languages',
  },
  es: {
    datospersonales: 'Datos Personales',
    edad: 'Edad',
    ubicacion: 'Ubicación',
    nacionalidad: 'Nacionalidad',
    idioma: 'Idiomas',
  },
};

export const PersonalDate: React.FC = () => {
  const { language } = useLangStore();

  const texts = {
    en: {
      ageValue: '22',
      locationValue: 'Tucumán, Argentina',
      nationalityValue: 'Argentinian',
      languagesValue: 'English - Spanish',
    },
    es: {
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
    </Container>
  );
};
