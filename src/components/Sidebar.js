// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Package, LayoutDashboard, PackageSearch, MapPin, Truck, Users,
  BarChart3, Bell, LogOut,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// roles absent = visible par tous les utilisateurs connectés
const LIENS = [
  { to: '/', label: 'Tableau de bord', icone: LayoutDashboard, fin: true },
  { to: '/colis', label: 'Colis', icone: PackageSearch },
  { to: '/suivi', label: 'Suivi', icone: MapPin },
  { to: '/livraisons', label: 'Livraisons', icone: Truck, roles: ['admin', 'livreur'] },
  { to: '/livreurs', label: 'Livreurs', icone: Users, roles: ['admin'] },
  { to: '/rapports', label: 'Rapports', icone: BarChart3, roles: ['admin'] },
];

const NOM_ROLE = { admin: 'Administrateur', livreur: 'Livreur', client: 'Client' };

const Sidebar = ({ nonLues }) => {
  const { user, logout } = useAuth();
  const initiales = (user.nom || '?').split(' ').map(m => m[0]).join('').slice(0, 2).toUpperCase();

  return (
    <aside className="sidebar">
      <div className="sidebar-haut">
        <div className="logo">
          <span className="logo-icone"><Package size={22} /></span>
          Suivi<span className="logo-accent">Colis</span>
        </div>

        <nav className="menu">
          {LIENS.filter(l => !l.roles || l.roles.includes(user.role)).map(({ to, label, icone: Icone, fin }) => (
            <NavLink key={to} to={to} end={fin} className="menu-lien">
              <Icone size={19} /> <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="sidebar-bas">
        <NavLink to="/notifications" className="menu-lien notif">
          <Bell size={19} /> <span>Notifications</span>
          {nonLues > 0 && <em className="pastille">{nonLues}</em>}
        </NavLink>

        <div className="utilisateur">
          <div className="avatar">{initiales}</div>
          <div className="utilisateur-infos">
            <strong>{user.nom}</strong>
            <small>{NOM_ROLE[user.role] || user.role}</small>
          </div>
          <button className="icone-bouton" onClick={logout} aria-label="Se déconnecter" title="Se déconnecter">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
