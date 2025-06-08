import React, { useState, useEffect } from 'react';

function BlackThemeSkipSelector() {
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [sortBy, setSortBy] = useState('size');
  const [filterBy, setFilterBy] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  

  const skipData = [
    {"id":17933,"size":4,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":278,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:52.813","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17934,"size":6,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":305,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:52.992","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17935,"size":8,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":375,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.171","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17936,"size":10,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":400,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.339","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17937,"size":12,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":439,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.516","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17938,"size":14,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":470,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.69","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17939,"size":16,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":496,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.876","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":15124,"size":20,"hire_period_days":14,"transport_cost":248,"per_tonne_cost":248,"price_before_vat":992,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:40.344435","updated_at":"2025-04-07T13:16:52.434","allowed_on_road":false,"allows_heavy_waste":true},
    {"id":15125,"size":40,"hire_period_days":14,"transport_cost":248,"per_tonne_cost":248,"price_before_vat":992,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:40.344435","updated_at":"2025-04-07T13:16:52.603","allowed_on_road":false,"allows_heavy_waste":false}
  ];


  const calculateFinalPrice = (priceBeforeVat, vat) => {
    const finalPrice = priceBeforeVat + (priceBeforeVat * vat / 100);
    return `£${finalPrice.toFixed(0)}`;
  };

  //  sort data
  const getFilteredAndSortedSkips = () => {
    let filtered = skipData;
    
    if (filterBy === 'road_allowed') {
      filtered = filtered.filter(skip => skip.allowed_on_road);
    } else if (filterBy === 'heavy_waste') {
      filtered = filtered.filter(skip => skip.allows_heavy_waste);
    }
    
    return filtered.sort((a, b) => {
      if (sortBy === 'size') return a.size - b.size;
      if (sortBy === 'price') return a.price_before_vat - b.price_before_vat;
      return 0;
    });
  };

  const filteredSkips = getFilteredAndSortedSkips();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSkipSelection = (skip) => {
    setSelectedSkip(skip);
  };

  if (isLoading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p style={styles.loadingText}>Loading premium skip options...</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Floating Orbs Background */}
      <div style={styles.backgroundOrbs}>
        <div style={{...styles.orb, top: '10%', left: '10%', animationDelay: '0s'}}></div>
        <div style={{...styles.orb, top: '20%', right: '15%', animationDelay: '2s'}}></div>
        <div style={{...styles.orb, bottom: '30%', left: '20%', animationDelay: '4s'}}></div>
      </div>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logoSection}>
            <div style={styles.logo}>⚫</div>
            <span style={styles.logoText}>SkipHire Pro</span>
          </div>
          
          <nav style={styles.nav}>
            <span style={styles.navItem}>Postcode: NR32</span>
            <span style={styles.navSeparator}>|</span>
            <span style={styles.navItemActive}>Select Skip</span>
          </nav>
          
          <h1 style={styles.title}>Premium Skip Selection</h1>
          <p style={styles.subtitle}>
            Professional waste management solutions for your project
          </p>
        </div>
      </header>

      {/* Dark Controls Panel */}
      <div style={styles.controlsPanel}>
        <div style={styles.controlsContent}>
          <div style={styles.controlsLeft}>
            <div style={styles.controlGroup}>
              <label style={styles.controlLabel}>Sort</label>
              <select 
                style={styles.darkSelect}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="size">By Size</option>
                <option value="price">By Price</option>
              </select>
            </div>
            
            <div style={styles.controlGroup}>
              <label style={styles.controlLabel}>Filter</label>
              <select 
                style={styles.darkSelect}
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option value="all">All Options</option>
                <option value="road_allowed">Road Placement</option>
                <option value="heavy_waste">Heavy Waste</option>
              </select>
            </div>
          </div>
          
          <div style={styles.resultsInfo}>
            <span style={styles.resultsCount}>{filteredSkips.length}</span>
            <span style={styles.resultsLabel}>Available</span>
          </div>
        </div>
      </div>

      {/* Skip Grid */}
      <div style={styles.skipGrid}>
        {filteredSkips.map((skip) => (
          <div 
            key={skip.id}
            style={{
              ...styles.skipCard,
              ...(selectedSkip?.id === skip.id ? styles.skipCardSelected : {})
            }}
            onClick={() => handleSkipSelection(skip)}
          >
            {/* Glow effect for selected */}
            {selectedSkip?.id === skip.id && <div style={styles.glowEffect}></div>}
            
            {/* Status indicator */}
            <div style={styles.statusIndicator}>
              <div style={{
                ...styles.statusDot,
                backgroundColor: skip.allowed_on_road ? '#1e3a8a' : '#ff4444'
              }}></div>
            </div>

            {/* Skip Visual */}
            <div style={styles.skipVisual}>
              <div style={styles.skipContainer}>
                <div style={styles.skipBox}>
                  <div style={styles.skipHandle}></div>
                  <div style={styles.skipContent}>
                    <span style={styles.skipSize}>{skip.size}</span>
                    <span style={styles.skipUnit}>YARD³</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skip Info */}
            <div style={styles.skipInfo}>
              <div style={styles.skipHeader}>
                <h3 style={styles.skipTitle}>{skip.size}Y Skip</h3>
                <div style={styles.priceContainer}>
                  <span style={styles.priceValue}>
                    {calculateFinalPrice(skip.price_before_vat, skip.vat)}
                  </span>
                  <span style={styles.priceLabel}>inc. VAT</span>
                </div>
              </div>

              <div style={styles.skipMeta}>
                <div style={styles.metaItem}>
                  <span style={styles.metaIcon}>📅</span>
                  <span style={styles.metaText}>{skip.hire_period_days} Days</span>
                </div>
                <div style={styles.metaItem}>
                  <span style={styles.metaIcon}>📍</span>
                  <span style={styles.metaText}>NR32 Area</span>
                </div>
              </div>

              {/* Premium Features */}
              <div style={styles.features}>
                <div style={{
                  ...styles.feature,
                  backgroundColor: skip.allowed_on_road ? 'rgba(30, 58, 138, 0.1)' : 'rgba(255, 68, 68, 0.1)',
                  color: skip.allowed_on_road ? '#1e3a8a' : '#ff4444'
                }}>
                  {skip.allowed_on_road ? '✓ Road OK' : '✗ Private Only'}
                </div>
                <div style={{
                  ...styles.feature,
                  backgroundColor: skip.allows_heavy_waste ? 'rgba(30, 58, 138, 0.1)' : 'rgba(255, 68, 68, 0.1)',
                  color: skip.allows_heavy_waste ? '#1e3a8a' : '#ff4444'
                }}>
                  {skip.allows_heavy_waste ? '✓ Heavy Waste' : '✗ Light Only'}
                </div>
              </div>

              {/* Select Button */}
              <button 
                style={{
                  ...styles.selectButton,
                  ...(selectedSkip?.id === skip.id ? styles.selectButtonSelected : {})
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSkipSelection(skip);
                }}
              >
                <span style={styles.buttonText}>
                  {selectedSkip?.id === skip.id ? '✓ SELECTED' : 'SELECT SKIP'}
                </span>
                <span style={styles.buttonArrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Summary */}
      {selectedSkip && (
        <div style={styles.summaryPanel}>
          <div style={styles.summaryContent}>
            <div style={styles.summaryLeft}>
              <h3 style={styles.summaryTitle}>Selected Configuration</h3>
              <div style={styles.summaryDetails}>
                <span style={styles.summarySize}>{selectedSkip.size} Yard Skip</span>
                <span style={styles.summaryPrice}>
                  {calculateFinalPrice(selectedSkip.price_before_vat, selectedSkip.vat)}
                </span>
              </div>
            </div>
            <div style={styles.summaryRight}>
              <button style={styles.proceedButton}>
                PROCEED TO BOOKING
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <button style={styles.backButton}>
          ← BACK
        </button>
        <button 
          style={{
            ...styles.continueButton,
            ...(selectedSkip ? {} : styles.continueButtonDisabled)
          }}
          disabled={!selectedSkip}
        >
          CONTINUE →
        </button>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },

  backgroundOrbs: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0,
  },

  orb: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
    animation: 'float 6s ease-in-out infinite',
  },

  loadingContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    color: 'white',
  },

  loadingSpinner: {
    width: '40px',
    height: '40px',
    border: '3px solid #333',
    borderTop: '3px solid #1e3a8a',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },

  loadingText: {
    marginTop: '16px',
    color: '#888',
    fontSize: '16px',
  },

  header: {
    padding: '32px 24px',
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
    borderBottom: '1px solid #333',
    position: 'relative',
    zIndex: 1,
  },

  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  logoSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  },

  logo: {
    fontSize: '24px',
    marginRight: '12px',
  },

  logoText: {
    fontSize: '18px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #ffffff 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  nav: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
    fontSize: '14px',
  },

  navItem: {
    color: '#888',
  },

  navSeparator: {
    margin: '0 12px',
    color: '#444',
  },

  navItemActive: {
    color: '#1e3a8a',
    fontWeight: '600',
  },

  title: {
    fontSize: '36px',
    fontWeight: '800',
    marginBottom: '12px',
    margin: '0 0 12px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #888 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },

  subtitle: {
    fontSize: '16px',
    color: '#aaa',
    margin: '0',
  },

  controlsPanel: {
    background: '#111',
    borderTop: '1px solid #333',
    borderBottom: '1px solid #333',
    padding: '20px 24px',
    position: 'relative',
    zIndex: 1,
  },

  controlsContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },

  controlsLeft: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
  },

  controlGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },

  controlLabel: {
    fontSize: '14px',
    color: '#888',
    fontWeight: '500',
  },

  darkSelect: {
    padding: '8px 12px',
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '6px',
    color: 'white',
    fontSize: '14px',
    cursor: 'pointer',
  },

  resultsInfo: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '8px',
  },

  resultsCount: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1e3a8a',
  },

  resultsLabel: {
    fontSize: '14px',
    color: '#888',
  },

  skipGrid: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
    position: 'relative',
    zIndex: 1,
  },

  skipCard: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    position: 'relative',
    backdropFilter: 'blur(10px)',
  },

  skipCardSelected: {
    borderColor: '#1e3a8a',
    boxShadow: '0 0 30px rgba(30, 58, 138, 0.3)',
    transform: 'translateY(-4px)',
  },

  glowEffect: {
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    right: '-2px',
    bottom: '-2px',
    background: 'linear-gradient(45deg, #1e3a8a, transparent, #1e3a8a)',
    borderRadius: '16px',
    zIndex: -1,
    animation: 'glow 2s linear infinite',
  },

  statusIndicator: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    zIndex: 2,
  },

  statusDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    boxShadow: '0 0 10px currentColor',
  },

  skipVisual: {
    height: '140px',
    background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  skipContainer: {
    perspective: '300px',
  },

  skipBox: {
    width: '80px',
    height: '60px',
    backgroundColor: '#333',
    borderRadius: '4px',
    border: '2px solid #555',
    position: 'relative',
    transform: 'rotateX(15deg) rotateY(-15deg)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  skipHandle: {
    position: 'absolute',
    top: '-4px',
    left: '10px',
    right: '10px',
    height: '6px',
    backgroundColor: '#666',
    borderRadius: '3px',
  },

  skipContent: {
    textAlign: 'center',
  },

  skipSize: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1e3a8a',
    display: 'block',
    lineHeight: '1',
  },

  skipUnit: {
    fontSize: '10px',
    color: '#888',
    fontWeight: '500',
  },

  skipInfo: {
    padding: '24px',
  },

  skipHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
  },

  skipTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'white',
    margin: '0',
  },

  priceContainer: {
    textAlign: 'right',
  },

  priceValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e3a8a',
    display: 'block',
    lineHeight: '1',
  },

  priceLabel: {
    fontSize: '12px',
    color: '#888',
  },

  skipMeta: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },

  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },

  metaIcon: {
    fontSize: '14px',
  },

  metaText: {
    fontSize: '14px',
    color: '#aaa',
  },

  features: {
    display: 'flex',
    gap: '8px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },

  feature: {
    padding: '6px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '600',
    border: '1px solid rgba(255,255,255,0.1)',
  },

  selectButton: {
    width: '100%',
    padding: '14px 20px',
    backgroundColor: '#2a2a2a',
    border: '1px solid #444',
    borderRadius: '8px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  selectButtonSelected: {
    backgroundColor: '#1e3a8a',
    color: '#000',
    border: '1px solid #1e3a8a',
  },

  buttonText: {
    letterSpacing: '0.5px',
  },

  buttonArrow: {
    fontSize: '16px',
    transition: 'transform 0.3s ease',
  },

  summaryPanel: {
    backgroundColor: '#111',
    borderTop: '1px solid #333',
    padding: '24px',
    position: 'relative',
    zIndex: 1,
  },

  summaryContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },

  summaryLeft: {
    flex: '1',
  },

  summaryTitle: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '8px',
    margin: '0 0 8px 0',
  },

  summaryDetails: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '16px',
  },

  summarySize: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'white',
  },

  summaryPrice: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e3a8a',
  },

  summaryRight: {
    flexShrink: 0,
  },

  proceedButton: {
    padding: '12px 24px',
    backgroundColor: '#1e3a8a',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    letterSpacing: '0.5px',
  },

  footer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '32px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    position: 'relative',
    zIndex: 1,
  },

  backButton: {
    padding: '12px 24px',
    backgroundColor: 'transparent',
    border: '1px solid #444',
    borderRadius: '6px',
    color: '#888',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    letterSpacing: '0.5px',
  },

  continueButton: {
    padding: '12px 24px',
    backgroundColor: '#1e3a8a',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '700',
    cursor: 'pointer',
    letterSpacing: '0.5px',
  },

  continueButtonDisabled: {
    backgroundColor: '#333',
    color: '#666',
    cursor: 'not-allowed',
  },
};

// Add animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes glow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  @media (max-width: 768px) {
    .mobile-stack {
      flex-direction: column !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default BlackThemeSkipSelector;