import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  flowchart: { 
    useMaxWidth: true, 
    htmlLabels: true, 
    curve: 'basis'
  }
});

const GrafoVisual = ({ estados, matriz }) => {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (!estados || estados.length === 0 || !matriz || matriz.length === 0) {
      if (mermaidRef.current) mermaidRef.current.innerHTML = '<p style="color:gray">Defina estados y matriz para visualizar el grafo.</p>';
      return;
    }

    const uniqueId = 'graph-' + Date.now();
    let definition = 'graph LR\n';
    definition += '  classDef default fill:#1e293b,stroke:#8b5cf6,stroke-width:2px,color:#f8fafc;\n';

    let hasEdges = false;
    estados.forEach((estado, i) => {
      if (matriz[i]) {
        matriz[i].forEach((prob, j) => {
          if (prob > 0) {
            hasEdges = true;
            definition += '  n' + i + '([' + estado + ']) -- "' + prob + '" --> n' + j + '([' + estados[j] + '])\n';
          }
        });
      }
    });

    if (!hasEdges) {
      if (mermaidRef.current) mermaidRef.current.innerHTML = '<p style="color:#fbbf24">Añada probabilidades mayores a 0 para ver conexiones.</p>';
      return;
    }

    const renderGraph = async () => {
      try {
        const { svg } = await mermaid.render(uniqueId, definition);
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = svg;
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
      }
    };

    renderGraph();
  }, [estados, matriz]);

  return (
    <div className='grafo-container' style={{ textAlign: 'center' }}>
      <h3>Red de Transiciones</h3>
      <div 
        ref={mermaidRef}
        style={{ 
          marginTop: '20px', 
          minHeight: '300px', 
          background: 'rgba(0,0,0,0.2)', 
          padding: '20px', 
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      ></div>
    </div>
  );
};

export default GrafoVisual;
