'use client'
import { useState } from 'react'

type Format = '360p' | '720p' | '1080p' | 'mp3'

export default function YouTubeDownloader() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [downloadUrl, setDownloadUrl] = useState('')
  const [title, setTitle] = useState('')
  const [format, setFormat] = useState<Format>('360p')
const handleDownload = () => {
  if (!url) {
    alert('Please enter a YouTube URL')
    return
  }

  // Basic YouTube URL validation
  if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
    alert('Please enter a valid YouTube URL')
    return
  }

  // Convert to ssyoutube
  let downloadLink = url

  if (url.includes('youtube.com')) {
    downloadLink = url.replace('https://www.youtube.com', 'https://www.ssyoutube.com')
  } else if (url.includes('youtu.be')) {
    downloadLink = url.replace('https://youtu.be', 'https://www.ssyoutube.com/watch?v=')
  }

  // Open in new tab
  window.open(downloadLink, '_blank')
}


  const formats: Format[] = ['360p', '720p', '1080p', 'mp3']

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-10">

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
          YouTube Video Downloader
        </h1>
        <p className="text-gray-500 text-center mb-6 text-sm md:text-base">
          Download YouTube videos in MP4 or MP3 format for free
        </p>

        {/* Input + Button */}
        <div className="flex flex-col md:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Paste YouTube video link here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <button
            onClick={handleDownload}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-semibold disabled:opacity-60"
          >
            {loading ? 'Processing...' : 'Download'}
          </button>
        </div>

        {/* Format selection */}
        <div className="mt-4 flex flex-wrap gap-3">
          {formats.map((f) => (
            <div
              key={f}
              onClick={() => setFormat(f)}
              className={`cursor-pointer px-4 py-2 rounded-xl border ${
                format === f ? 'bg-blue-600 text-white' : 'border-gray-300 text-gray-700'
              } hover:bg-blue-500 hover:text-white transition`}
            >
              {f === 'mp3' ? 'MP3 Audio' : `MP4 ${f}`}
            </div>
          ))}
        </div>

        {/* Download Link */}
        {downloadUrl && (
          <div className="mt-6 text-center">
            <p className="mb-2 font-medium">Ready to download: <span className="font-bold">{title}</span></p>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Download Now
            </a>
          </div>
        )}

        {/* Info */}
        <div className="mt-6 text-xs text-gray-400 text-center">
          This tool is for personal and educational use only.
        </div>
      </div>
    </div>
  )
}
