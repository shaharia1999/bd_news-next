import { Fragment } from "react";
import Image from "next/image";

interface Props {
  description: string; // HTML string
  images?: string[];
  limit?: number; // Optional word limit
}

export function RenderHTMLWithImagesServer({ description, images = [], limit }: Props) {
  // Remove HTML tags and prepare plain text
  const clean = description
    .replace(/<\/p>\s*<p>/g, '\n\n')
    .replace(/<[^>]+>/g, '')
    .trim();

  let words = clean.split(/\s+/);

  // Apply limit if provided
  if (limit && limit > 0) {
    words = words.slice(0, limit);
  }

  // Chunk words into groups of ~100
  const chunks: string[][] = [];
  let temp: string[] = [];

  for (let i = 0; i < words.length; i++) {
    temp.push(words[i]);
    if ((i + 1) % 100 === 0 || i === words.length - 1) {
      chunks.push(temp);
      temp = [];
    }
  }

  let imageIndex = 0;

  return (
    <div className="prose max-w-none font-publicsans">
      {chunks.map((chunk, index) => (
        <Fragment key={index}>
          <p>{chunk.join(" ")}</p>
          {images[imageIndex] && (
            <div className="my-4">
              <Image
                src={images[imageIndex]}
                alt={`Image ${imageIndex + 1}`}
                width={800}
                height={450}
                className="w-full object-cover rounded-md"
              />
              {/* {imageIndex++} */}
            </div>
          )}
        </Fragment>
        
      ))}
    </div>
  );
}
