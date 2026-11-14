// src/components/CarteStat.js
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

// inverse = true quand une hausse est une mauvaise nouvelle (ex : colis retournés)
const CarteStat = ({ icone: Icone, couleur, label, valeur, variation, inverse }) => {
  let tendance = <span className="tendance neutre">Aucune variation ce mois-ci</span>;

  if (variation) {
    const bon = inverse ? !variation.hausse : variation.hausse;
    const Fleche = variation.hausse ? ArrowUp : ArrowDown;
    tendance = (
      <span className={`tendance ${bon ? 'bon' : 'mauvais'}`}>
        <Fleche size={13} />
        {variation.pct === null ? 'Nouveau ce mois-ci' : <>{variation.pct}% <small>ce mois-ci</small></>}
      </span>
    );
  }

  return (
    <div className="carte carte-stat">
      <div className={`stat-icone ${couleur}`}><Icone size={24} /></div>
      <div>
        <div className="stat-label">{label}</div>
        <div className="stat-valeur">{valeur}</div>
        {tendance}
      </div>
    </div>
  );
};

export default CarteStat;
