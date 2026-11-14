// src/components/EnTete.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, Plus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const EnTete = ({ titre, sousTitre }) => {
  const [terme, setTerme] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  const rechercher = e => {
    e.preventDefault();
    navigate(terme.trim() ? `/colis?q=${encodeURIComponent(terme.trim())}` : '/colis');
  };

  return (
    <header className="entete">
      <div>
        <h1>{titre}</h1>
        {sousTitre && <p className="sous-titre">{sousTitre}</p>}
      </div>

      <div className="entete-actions">
        <form className="recherche" onSubmit={rechercher}>
          <input
            type="text"
            placeholder="Rechercher un colis..."
            value={terme}
            onChange={e => setTerme(e.target.value)}
          />
          <button type="submit" aria-label="Rechercher"><Search size={18} /></button>
        </form>
        <Link to="/notifications" className="icone-bouton" aria-label="Notifications"><Bell size={20} /></Link>
        {user.role === 'admin' && (
          <Link to="/ajouter" className="btn btn-primaire"><Plus size={18} /> Nouveau colis</Link>
        )}
      </div>
    </header>
  );
};

export default EnTete;
