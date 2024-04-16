import "./App.css";
function App() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });
  }

  return <div className="App">4</div>;
}

export default App;
