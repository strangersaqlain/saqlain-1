const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-portfolio-bg">
      <div className="text-6xl font-bold">
        <span className="text-portfolio-accent">Loading</span>
        <span className="text-white">
          <span 
            className="inline-block animate-pulse"
            style={{
              animation: 'dotFill1 3s infinite',
            }}
          >
            .
          </span>
          <span 
            className="inline-block animate-pulse"
            style={{
              animation: 'dotFill2 3s infinite',
            }}
          >
            .
          </span>
          <span 
            className="inline-block animate-pulse"
            style={{
              animation: 'dotFill3 3s infinite',
            }}
          >
            .
          </span>
        </span>
      </div>
      
      <style jsx>{`
        @keyframes dotFill1 {
          0%, 10% { color: white; }
          10%, 20% { color: #FACC15; }
          20%, 60% { color: white; }
          60%, 70% { color: #FACC15; }
          70%, 100% { color: white; }
        }
        
        @keyframes dotFill2 {
          0%, 15% { color: white; }
          15%, 25% { color: #FACC15; }
          25%, 65% { color: white; }
          65%, 75% { color: #FACC15; }
          75%, 100% { color: white; }
        }
        
        @keyframes dotFill3 {
          0%, 20% { color: white; }
          20%, 30% { color: #FACC15; }
          30%, 70% { color: white; }
          70%, 80% { color: #FACC15; }
          80%, 100% { color: white; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
