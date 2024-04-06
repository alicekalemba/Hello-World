import "./App.css";

function App() {
  const histogramData = [
    { label: 'Alice', value: 100 },
    { label: 'Bridget', value: 200 },
    { label: 'Christo', value: 150 },
    { label: 'Dave', value: 75 },
    { label: 'Edrian', value: 50 }
  ];

  return (
    <>
      <div style={{ backgroundColor: 'gray', padding: '20px', marginBottom: '20px' }}>
        <h1>Hello World!</h1>
        <p>My name is Alice</p>
        <img src="https://www.thesprucepets.com/thmb/Qt7k6w4eikK9ZDKULTEX7YEaAZs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-181861505-4e63227ed0a14dc9bfe86848ef54caf3.jpg" alt="Cat" style={{ width: '500px' }} />
      </div>

      <div style={{ padding: '20px' }}>
        <h2>The most performing clients</h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start', alignItems: 'flex-end', height: '300px', border: '1px solid black', left: '10px', position: 'relative' }}>
          {histogramData.map(data => (
            <div key={data.label} style={{ width: '40px', height: `${data.value}px`, backgroundColor: 'blue', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
              <span style={{ color: 'white', margin: '5px 0' }}>{data.value}</span>
            </div>
          ))}
        </div>
        <div style={{marginTop: '5px' }}>
          {histogramData.map(data => (
            <span key={data.label} style={{ width: '40px', textAlign: 'center', marginRight: '10px' }}>{data.label}</span>
          ))}
        </div>
        <p style={{ textAlign: 'left', marginTop: '10px' }}>Clients' Names</p>
        <p style={{ position: 'absolute', top: '95%', left: '10px', transform: 'translateY(-50%) rotate(-90deg)' }}>Profits Made</p>
      </div>
    </>
  );
}

export default App;
