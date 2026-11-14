// src/components/DonutStatuts.js
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { grouperStatuts } from '../utils/stats';

const DonutStatuts = ({ colis }) => {
  const { livres, enCours, retournes } = grouperStatuts(colis);
  const total = colis.length;

  const donnees = [
    { nom: 'Livrés', valeur: livres, couleur: '#3b6bff' },
    { nom: 'En cours', valeur: enCours, couleur: '#8b5cf6' },
    { nom: 'Retournés', valeur: retournes, couleur: '#ec4899' },
  ];
  const pct = v => (total ? ((v / total) * 100).toFixed(1) : '0.0');

  return (
    <div className="carte">
      <h3 className="carte-titre">Répartition des colis</h3>
      <div className="donut-contenu">
        <div className="donut">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={total ? donnees : [{ nom: 'Vide', valeur: 1, couleur: '#e8ebf5' }]}
                dataKey="valeur" innerRadius="68%" outerRadius="100%"
                paddingAngle={total ? 2 : 0} stroke="none"
              >
                {(total ? donnees : [{ couleur: '#e8ebf5' }]).map((d, i) => (
                  <Cell key={i} fill={d.couleur} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-centre">
            <strong>{total}</strong>
            <small>Total</small>
          </div>
        </div>

        <ul className="legende">
          {donnees.map(d => (
            <li key={d.nom}>
              <span className="puce" style={{ background: d.couleur }} />
              <span className="legende-nom">{d.nom}</span>
              <span className="legende-valeur">{d.valeur} ({pct(d.valeur)}%)</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DonutStatuts;
