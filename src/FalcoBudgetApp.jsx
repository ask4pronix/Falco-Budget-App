import React, { useMemo, useState } from 'react';

const CATEGORIES = [
  'Characters & Units',
  'Enemies & Bosses',
  'Environments',
  'UI / FX / Audio',
];

const DATA = [
  {
    category: 'Characters & Units',
    assetName: 'Base Torso',
    subtask: 'Idle, crawl, feed, death',
    roles: 'Animator, Rigger',
    animations: 4,
    costPerAnimation: 400,
    riggingCost: 300,
    duration: '7 days',
  },
  {
    category: 'Characters & Units',
    assetName: 'Human Limbs (5 types)',
    subtask: 'Idle, attack, damage, walk/trip',
    roles: 'Animator, Rigger',
    animations: 10,
    costPerAnimation: 350,
    riggingCost: 500,
    duration: '10 days',
  },
  {
    category: 'Characters & Units',
    assetName: 'Monster Limbs (12 types)',
    subtask: 'Idle, attack, damage',
    roles: 'Animator, Rigger',
    animations: 12,
    costPerAnimation: 450,
    riggingCost: 700,
    duration: '12 days',
  },
  {
    category: 'Characters & Units',
    assetName: 'Robot Limbs (12 types)',
    subtask: 'Idle, attack, damage, mechanical FX',
    roles: 'Animator, Tech Artist',
    animations: 12,
    costPerAnimation: 500,
    riggingCost: 900,
    duration: '12 days',
  },
  {
    category: 'Characters & Units',
    assetName: 'Organs (Heart, Lungs)',
    subtask: 'Breathing, pulse, collapse',
    roles: 'Animator, FX Artist',
    animations: 4,
    costPerAnimation: 300,
    riggingCost: 200,
    duration: '5 days',
  },
  {
    category: 'Enemies & Bosses',
    assetName: 'Early Monsters (Rats, Blobs, Worms – 3)',
    subtask: 'Idle, swarm, attack, death',
    roles: 'Animator',
    animations: 6,
    costPerAnimation: 300,
    riggingCost: 200,
    duration: '6 days',
  },
  {
    category: 'Enemies & Bosses',
    assetName: 'Humanoids (Procedural)',
    subtask: 'Modular idle/attack/death',
    roles: 'Animator, Tech Artist',
    animations: 4,
    costPerAnimation: 300,
    riggingCost: 200,
    duration: '5 days',
  },
  {
    category: 'Enemies & Bosses',
    assetName: 'Bosses (Maw, Harvester, Surgeon, Brood, Prophet)',
    subtask: 'Unique attacks, death',
    roles: 'Animator, VFX Artist, Rigger',
    animations: 8,
    costPerAnimation: 450,
    riggingCost: 600,
    duration: '12 days',
  },
  {
    category: 'Environments',
    assetName: 'Dungeon Rooms (Flesh, Bone, Surgical, Robotic, Rot, Abyss, Safe)',
    subtask: 'Tile loops (pulse, drip, sparks)',
    roles: 'Environment Artist, Animator',
    animations: 6,
    costPerAnimation: 250,
    riggingCost: 900,
    duration: '10 days',
  },
  {
    category: 'UI / FX / Audio',
    assetName: 'UI / UX (HUD, Action Menu, Inventory, Tech Trees)',
    subtask: 'HUD icons & transitions',
    roles: 'UI Artist, Animator',
    animations: 6,
    costPerAnimation: 250,
    riggingCost: 300,
    duration: '6 days',
  },
  {
    category: 'UI / FX / Audio',
    assetName: 'Particles & FX (Blood, Sparks, Madness, Poison)',
    subtask: 'FX loops',
    roles: 'VFX Artist',
    animations: 6,
    costPerAnimation: 200,
    riggingCost: 200,
    duration: '5 days',
  },
  {
    category: 'UI / FX / Audio',
    assetName: 'Audio (Sync & Triggers)',
    subtask: 'SFX timing aligned to anims',
    roles: 'Sound Designer',
    animations: 0,
    costPerAnimation: 0,
    riggingCost: 1500,
    duration: '7 days',
  },
];

function currency(n) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function FalcoBudgetApp() {
  const [activeCategory, setActiveCategory] = useState('Characters & Units');

  const rows = React.useMemo(() => DATA.filter(d => d.category === activeCategory), [activeCategory]);
  const categorySubtotal = React.useMemo(() => rows.reduce((acc, r) => acc + (r.animations * r.costPerAnimation + r.riggingCost), 0), [rows]);
  const grandTotal = React.useMemo(() => DATA.reduce((acc, r) => acc + (r.animations * r.costPerAnimation + r.riggingCost), 0), []);

  return (
    <div style={{ background: 'linear-gradient(to bottom right, #4b006e, #111)', minHeight: '100vh', padding: '20px', color: 'white' }}>
      <header style={{ marginBottom: '20px', borderBottom: '2px solid purple', paddingBottom: '10px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#c084fc' }}>Falco Enterprises</h1>
        <p style={{ color: '#e9d5ff' }}>Torsolo Production Budget • Total: <span style={{ fontWeight: 'bold', color: 'white' }}>{currency(grandTotal)}</span></p>
        <h2 style={{ fontWeight: 'bold', color: '#a78bfa' }}>Current Category: {activeCategory} (Subtotal: {currency(categorySubtotal)})</h2>
      </header>
      <div>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)} style={{ marginRight: '8px', marginBottom: '8px', padding: '10px 20px', borderRadius: '12px', fontWeight: 'bold', border: '1px solid #a78bfa', background: activeCategory === cat ? '#a855f7' : '#1e1b4b', color: activeCategory === cat ? 'black' : 'white' }}>{cat}</button>
        ))}
      </div>
      <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#3b0764' }}>
            {['Asset Name', 'Subtask', 'Responsible Roles', 'Animations', 'Cost per Animation', 'Rigging Cost', 'Cost', 'Duration'].map(h => (
              <th key={h} style={{ padding: '10px', textAlign: 'left', fontWeight: 'bold', color: '#e9d5ff', borderBottom: '1px solid #a78bfa' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const cost = r.animations * r.costPerAnimation + r.riggingCost;
            return (
              <tr key={i} style={{ borderBottom: '1px solid #4c1d95' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>{r.assetName}</td>
                <td style={{ padding: '10px', color: '#ddd' }}>{r.subtask}</td>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>{r.roles}</td>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>{r.animations}</td>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#c084fc' }}>{currency(r.costPerAnimation)}</td>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#c084fc' }}>{currency(r.riggingCost)}</td>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>{currency(cost)}</td>
                <td style={{ padding: '10px', color: '#ddd' }}>{r.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
