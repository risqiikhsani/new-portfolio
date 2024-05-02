"use client"
import { useEffect, useState } from "react";

export default function Visitor() {
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    const incrementViewerCount = async () => {
      try {
        const response = await fetch('/api/visitor', {
          method: 'POST',
        });
        const data = await response.json();
        setViewerCount(data.count);
      } catch (err) {
        console.error(err);
      }
    };

    incrementViewerCount();
  }, []); // This effect will run only once on component mount

  useEffect(() => {
    const fetchViewerCount = async () => {
      try {
        const response = await fetch('/api/visitor');
        const data = await response.json();
        setViewerCount(data.count);
      } catch (err) {
        console.error(err);
      }
    };

    fetchViewerCount();
  }, []); // This effect will also run only once on component mount

  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>Number of visitors: {viewerCount}</p>
    </div>
  );
}