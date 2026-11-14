// src/components/Layout.js
import React, { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import api from '../api';

function Layout() {
  const [nonLues, setNonLues] = useState(0);

  // Compte les notifications non lues (utilisé par la pastille de la sidebar)
  const rafraichirNotifs = useCallback(() => {
    api.get('/notifications')
      .then(res => setNonLues(res.data.filter(n => !n.lu).length))
      .catch(() => setNonLues(0));
  }, []);

  useEffect(() => { rafraichirNotifs(); }, [rafraichirNotifs]);

  return (
    <div className="app">
      <Sidebar nonLues={nonLues} />
      <main className="principal">
        <Outlet context={{ rafraichirNotifs }} />
      </main>
    </div>
  );
}

export default Layout;
