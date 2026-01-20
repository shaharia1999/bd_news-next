"use client";

import { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { v4 as uuidv4 } from "uuid";

const QRCodeShortener = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const qrWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleGenerate = () => {
    if (!url) {
      setError("Please enter a valid URL.");
      return;
    }
    const shortId = uuidv4().slice(0, 8);
    const shortLink = `${window.location.origin}/s/${shortId}`;
    setShortUrl(shortLink);
    setError("");
  };

  const handleDownloadPNG = () => {
    const svg = qrWrapperRef.current?.querySelector("svg");
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgData = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qr-code.png";
      downloadLink.click();
    };

    img.src = url;
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Link Shortener & QR Code
      </h2>

      <input
        type="text"
        placeholder="Enter URL"
        className="w-full border rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition mb-4"
        onClick={handleGenerate}
      >
        Generate
      </button>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      {shortUrl && (
        <div className="text-center">
          <p className="mb-2 font-medium">Short Link:</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline break-all"
          >
            {shortUrl}
          </a>

          <div ref={qrWrapperRef} className="mt-4">
            <p className="mb-2 font-medium">QR Code:</p>
            <QRCodeSVG value={url} size={180} className="mx-auto" />
          </div>

          <button
            onClick={handleDownloadPNG}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Download PNG
          </button>
        </div>
      )}
    </div>
  );
};

export default QRCodeShortener;
