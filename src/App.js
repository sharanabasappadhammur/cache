import "./App.css";

function App() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        console.log("111");

        registration.unregister();
      });
    });
  }

  return <div className="App">10</div>;
}

export default App;
