// src/components/TopVilles.js
import React from 'react';
import { topVilles } from '../utils/stats';

const TopVilles = ({ colis }) => {
  const villes = topVilles(colis);
  const max = villes.length ? villes[0].total : 1;

  return (
    <div className="carte">
      <h3 className="carte-titre">Villes les plus livrées</h3>
      {villes.length === 0 && <p className="vide">Aucune donnée pour le moment.</p>}
      {villes.map(v => (
        <div className="ville" key={v.ville}>
          <div className="ville-ligne">
            <span>{v.ville}</span>
            <strong>{v.total}</strong>
          </div>
          <div className="barre"><div className="barre-remplie" style={{ width: `${(v.total / max) * 100}%` }} /></div>
        </div>
      ))}
    </div>
  );
};

export default TopVilles;
