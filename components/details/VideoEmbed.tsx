import React from 'react';

const VideoEmbed: React.FC = () => {
  const videoId = "m1T8mYmYYpU"; // Replace with the actual video ID

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-xl bg-gray-900">
        <div className="relative pb-[56.25%]"> {/* Aspect ratio container for 16:9 */}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Dragon Hills 2 - game full of destruction and mayhem"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-t-lg"
          ></iframe>
        </div>
        <div className="p-4 text-center bg-gray-800 text-gray-100 rounded-b-lg">
          <h3 className="text-lg font-bold">Dragon Hills 2 - Full of Destruction and Mayhem</h3>
          <p className="text-sm mt-2">Watch the gameplay trailer to see the zombie-smashing action in Dragon Hills 2!</p>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
