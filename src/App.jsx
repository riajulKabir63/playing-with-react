import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "auto",
        paddingTop: "1rem",
        width: 800,
      }}
    >
      <h1 className="title">Pokemon Search</h1>
      <table width="100%">
        <thead>
          <tr>
            <th>name</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>bulbasur</td>
            <td>groce</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
