// src/components/CourbeSemaine.js
import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import { derniers7Jours } from '../utils/stats';

const CourbeSemaine = ({ colis }) => (
  <div className="carte">
    <h3 className="carte-titre">Colis créés <span className="carte-periode">7 derniers jours</span></h3>
    <div className="graphique">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={derniers7Jours(colis)} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="degrade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b6bff" stopOpacity={0.28} />
              <stop offset="95%" stopColor="#3b6bff" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#eef0f8" />
          <XAxis dataKey="jour" tickLine={false} axisLine={false} tick={{ fill: '#8a93a8', fontSize: 12 }} />
          <YAxis allowDecimals={false} tickLine={false} axisLine={false} tick={{ fill: '#8a93a8', fontSize: 12 }} />
          <Tooltip formatter={v => [v, 'Colis']} />
          <Area type="monotone" dataKey="total" stroke="#3b6bff" strokeWidth={2.5} fill="url(#degrade)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default CourbeSemaine;
