// src/components/DerniersColis.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, PackageCheck, PackageX } from 'lucide-react';
import StatutBadge from './StatutBadge';
import { tempsRelatif } from '../utils/stats';

const iconeDuStatut = statut => {
  if (statut === 'Livré') return { Icone: PackageCheck, classe: 'vert' };
  if (statut === 'Retourné') return { Icone: PackageX, classe: 'rose' };
  return { Icone: Truck, classe: 'bleu' };
};

const DerniersColis = ({ colis }) => {
  const recents = [...colis]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 4);

  return (
    <div className="carte">
      <div className="carte-entete">
        <h3 className="carte-titre">Derniers colis</h3>
        <Link to="/colis" className="lien">Voir tout</Link>
      </div>

      {recents.length === 0 && <p className="vide">Aucun colis pour le moment.</p>}

      {recents.map(c => {
        const { Icone, classe } = iconeDuStatut(c.statut_actuel);
        return (
          <div className="recent" key={c.id}>
            <span className={`recent-icone ${classe}`}><Icone size={18} /></span>
            <div className="recent-infos">
              <strong>#{c.numero_suivi}</strong>
              <small>{c.expediteur} → {c.destinataire}</small>
            </div>
            <StatutBadge statut={c.statut_actuel} />
            <span className="recent-temps">{tempsRelatif(c.created_at)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DerniersColis;
