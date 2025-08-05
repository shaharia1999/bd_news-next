import { Fragment } from "react";
import Image from "next/image";

interface Props {
  description: string; // HTML string
  images?: string[];
}

export function RenderHTMLWithImagesServer({ description, images = [] }: Props) {
  const clean = description
    .replace(/<\/p>\s*<p>/g, '\n\n') // replace paragraph breaks with double newline
    .replace(/<[^>]+>/g, '') // strip HTML tags to get plain text
    .trim();

  const words = clean.split(/\s+/);
  const chunks: string[][] = [];
  let temp: string[] = [];

  for (let i = 0; i < words.length; i++) {
    temp.push(words[i]);
    if ((i + 1) % 100 === 0 || i === words.length - 1) {
      chunks.push(temp);
      temp = [];
    }
  }

  const htmlParts = description
    .split(/<\/p>\s*/g)
    .map((block) => block.trim())
    .filter(Boolean);

  let imageIndex = 0;

  return (
    <div className="prose max-w-none">
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
              {imageIndex++}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
