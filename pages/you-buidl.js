// pages/you-buidl.js
import React from "react";

const YouBuidlPage = () => {
  return (
    <div style={{ height: "100vh", width: "100%", margin: 0, padding: 0 }}>
      <iframe
        src="https://youbuidl-social.vercel.app/"
        width="100%"
        height="100%"
        style={{
          border: "none",
          display: "block",
          overflow: "auto", // Ensure the content is scrollable
          background: "transparent", // Make the iframe background transparent
          // Ensure scrollbars are hidden but still allow scrolling
          scrollbarWidth: "thin",  // Make the scrollbar thin for Firefox
          msOverflowStyle: "none", // For IE/Edge
        }}
        title="YouBuidl Social"
        scrolling="yes"  // Enable scrolling inside the iframe
        loading="lazy"  // Lazy load the iframe for performance
      />
      <style jsx>{`
        iframe::-webkit-scrollbar {
          width: 5px; /* Set scrollbar width */
        }

        iframe::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.2); /* Make the scrollbar thumb semi-transparent */
          border-radius: 10px; /* Optional: round the corners of the scrollbar */
        }

        iframe::-webkit-scrollbar-track {
          background: transparent; /* Make the track transparent */
        }
      `}</style>
    </div>
  );
};

export default YouBuidlPage;
