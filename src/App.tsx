import './App.css'

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{
          border: "1px solid red",
          height: 56,
          width: 180,
          minWidth: 180,
          maxWidth: 180,
        }}></div>
        <div style={{
          border: "1px solid red",
          height: 56,
          width: 100,
          minWidth: 100,
          maxWidth: 100,
        }}></div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{
          border: "1px solid blue",
          minWidth: 180,
          maxWidth: 180,
          minHeight: 52,
          maxHeight: 52,
        }}></div>
        <div style={{
          border: "1px solid blue",
          minWidth: 100,
          maxWidth: 100,
          minHeight: 52,
          maxHeight: 52,
        }}></div>
      </div>
    </>
  )
}

export default App
