import Header from './components/Header';
import MarkdownViewer from './components/MarkdownViewer';
import './App.css'; // Keep existing CSS if any

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
          <MarkdownViewer />
        </div>
      </main>
    </div>
  );
}

export default App;
