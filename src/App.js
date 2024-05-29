import "./App.css";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function App() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        registration.unregister();
      });
    });
  }

  return <div className="App">1</div>;
}

export default App;
// serviceWorkerRegistration.register();
