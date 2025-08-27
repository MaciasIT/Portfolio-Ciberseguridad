import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Import the raw markdown file content
// This assumes the file is directly importable by Vite.
// The '?raw' suffix tells Vite to import the file content as a string.
import DeclaracionMd from '../portfolio_content/curriculum/Declaración.md?raw';

const MarkdownViewer = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    setMarkdown(DeclaracionMd);
  }, []);

  return (
    <div className="prose prose-lg max-w-none p-4 leading-relaxed text-gray-700"> {/* Enhanced Tailwind's prose for better typography */}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;