'use client';
import React, { useState, useEffect } from 'react';
import { LuInstagram, LuDownload, LuShare2 } from "react-icons/lu";


const VideoPlayer = ({ src }: { src: string }) => (
  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
    <video src={src} controls className="w-full h-full object-cover" />
  </div>
);

const InstagramDownloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch video automatically whenever videoUrl changes
  useEffect(() => {
    if (!videoUrl) return;

    const fetchVideo = async () => {
      setIsLoading(true);
      setMessage('');
      setDownloadLink('');

      try {
        const response = await fetch('http://localhost:5000/download/instagram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: videoUrl }),
        });

        if (!response.ok) throw new Error('Failed to fetch video data.');

        const data = await response.json();
        setDownloadLink(data.downloadUrl);
        setMessage('Video is ready to download!');
      } catch (error: any) {
        setMessage(error.message);
        setDownloadLink('');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, [videoUrl]);

  // Paste handler
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setVideoUrl(text);
      setMessage('');
    } catch {
      setMessage('Failed to read from clipboard. Paste manually.');
    }
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-lg mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6 transform transition-all duration-300 hover:scale-105">
        <div className="relative flex items-center bg-gray-50 rounded-full p-2 shadow-inner">
          <div className="p-3 bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full">
            <LuInstagram className="text-white w-5 h-5" />
          </div>
          <input
            type="text"
            className="flex-grow p-2 pl-4 bg-transparent outline-none text-gray-700"
            placeholder="Enter Instagram Video URL here..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
          <button
            onClick={handlePaste}
            className="bg-blue-600 text-white rounded-full px-6 py-2 shadow-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Paste
          </button>
        </div>

        {downloadLink ? (
          <div className="flex flex-col items-center space-y-4">
            <VideoPlayer src={downloadLink} />
            <a
              href={downloadLink}
              download
              className="w-full flex justify-center items-center space-x-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
            >
              <LuDownload /> <span>Download Video</span>
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <LuInstagram className="text-8xl opacity-50" />
              </div>
            </div>
            <button
              onClick={() => setVideoUrl(videoUrl)} // triggers fetch manually if needed
              disabled={isLoading}
              className="w-full flex justify-center items-center space-x-2 px-6 py-3 bg-green-500 text-white font-bold rounded-full shadow-lg transition-colors duration-200 disabled:bg-green-300 disabled:cursor-not-allowed hover:bg-green-600"
            >
              {isLoading ? 'Processing...' : 'Download Video'}
            </button>
          </div>
        )}

        {message && <div className="text-center mt-4 text-sm text-red-500">{message}</div>}
      </div>
    </div>
    </>
  );
};

export default InstagramDownloader;
