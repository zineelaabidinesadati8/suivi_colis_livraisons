// src/components/StatutBadge.js
import React from 'react';
import { CLASSES_STATUT } from '../constants';

const StatutBadge = ({ statut }) => (
  <span className={`badge ${CLASSES_STATUT[statut] || 'badge-gris'}`}>{statut}</span>
);

export default StatutBadge;
