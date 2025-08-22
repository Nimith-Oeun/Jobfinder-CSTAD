import React from "react";
import { useNavigate } from "react-router-dom";

export default function JobCard({ title, company, type, salary, location, thumbnail, skills = [], id }) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    navigate(`/Jobs/Jobs-Details/${item.id}`, { state: item });
    console.log("itemFromJoblist", item);
  };
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.7)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255,255,255,0.18)',
        padding: '32px',
        marginBottom: '32px',
        display: 'flex',
        alignItems: 'center',
        transition: 'transform 0.2s, box-shadow 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'scale(1.025)';
        e.currentTarget.style.boxShadow = '0 16px 40px 0 rgba(31, 38, 135, 0.22)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.15)';
      }}
    >
      {/* Gradient Accent Bar */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: '8px',
        background: 'linear-gradient(180deg,#18a0fb,#18c8fb)',
        borderRadius: '20px 0 0 20px',
      }} />
      {/* Thumbnail or Logo */}
      <div style={{ flex: '0 0 80px', marginRight: '32px', zIndex: 1 }}>
        <img src={thumbnail} alt="Job Thumbnail" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: '16px', background: '#eaf6ff', boxShadow: '0 2px 8px rgba(24,160,251,0.12)' }} />
      </div>
      {/* Job Info */}
      <div style={{ flex: 1, zIndex: 1 }}>
        <div style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px', color: '#0a2956', letterSpacing: '0.5px' }}>{title}</div>
        <div style={{ fontSize: '16px', color: '#b0bec5', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="company" style={{ marginRight: 8 }}>🏢</span>{company}
        </div>
        <div style={{ fontSize: '16px', color: '#26c281', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="salary" style={{ marginRight: 8 }}>💰</span>{salary}
        </div>
        <div style={{ fontSize: '16px', color: '#e57373', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="location" style={{ marginRight: 8 }}>📍</span>{location}
        </div>
        {/* Skills Chips */}
        <div style={{ marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {skills.map((skill, idx) => (
            <span key={idx} style={{
              background: 'linear-gradient(90deg,#18a0fb,#18c8fb)',
              color: 'white',
              borderRadius: '12px',
              padding: '4px 14px',
              fontSize: '13px',
              fontWeight: 'bold',
              boxShadow: '0 2px 8px rgba(24,160,251,0.12)',
              letterSpacing: '0.2px',
            }}>{skill.name}</span>
          ))}
        </div>
      </div>
      {/* Action Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px', zIndex: 1 }}>
        <span style={{ background: 'linear-gradient(90deg,#18a0fb,#18c8fb)', color: 'white', borderRadius: '20px', padding: '8px 18px', fontWeight: 'bold', fontSize: '15px', boxShadow: '0 2px 8px rgba(24,160,251,0.12)' }}>{type}</span>
        <button
          style={{ background: 'linear-gradient(90deg,#18a0fb,#18c8fb)', color: 'white', border: 'none', borderRadius: '12px', padding: '12px 36px', fontWeight: 'bold', fontSize: '17px', cursor: 'pointer', transition: 'box-shadow 0.2s', boxShadow: '0 2px 8px rgba(24,160,251,0.12)' }}
          onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(24,160,251,0.25)'}
          onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(24,160,251,0.12)'}
          onClick={() => { handleClick(id) }}
        >
          View Details &rarr;
        </button>
      </div>
    </div>
  );
}
