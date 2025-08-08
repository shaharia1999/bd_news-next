// // import { Fragment } from "react";
// import Image from "next/image";

// interface Props {
//   description: string; // HTML string
//   images?: string[];
//   limit?: number; // Optional word limit
// }

// export function RenderHTMLWithImagesServer({ description, images = [], limit }: Props) {
//   // Step 1: Strip HTML tags and extract plain text
//   const plainText = description
//     .replace(/<\/p>\s*<p>/g, '\n\n') // Treat paragraph breaks as double newline
//     .replace(/<[^>]+>/g, '') // Strip HTML tags
//     .trim();

//   let words = plainText.split(/\s+/);

//   // Step 2: Apply optional word limit
//   if (limit && limit > 0) {
//     words = words.slice(0, limit);
//   }

//   const chunks: string[][] = [];
//   let temp: string[] = [];

//   for (let i = 0; i < words.length; i++) {
//     temp.push(words[i]);
//     // Break after 100 words for visual readability
//     if ((i + 1) % 100 === 0 || i === words.length - 1) {
//       chunks.push(temp);
//       temp = [];
//     }
//   }

//   // Step 3: Render paragraphs, insert image after every 800 words
//   let imageIndex = 0;

//   return (
//     <div className="prose max-w-none font-publicsans">
//       {chunks.map((chunk, index) => {
//         const totalWordsSoFar = index * 100;

//         const showImage =
//           imageIndex < images.length && totalWordsSoFar > 0 && totalWordsSoFar % 800 === 0;

//         return (
//           <Fragment key={index}>
//             <p>{chunk.join(" ")}</p>
//             {showImage && (
//               <div className="my-4">
//                 <Image
//                   src={images[imageIndex++]}
//                   alt={`Image ${imageIndex}`}
//                   width={800}
//                   height={450}
//                   className="w-full object-cover rounded-md"
//                 />
//               </div>
//             )}
//           </Fragment>
//         );
//       })}
//     </div>
//   );
// }
// import { Fragment } from "react";
// import Image from "next/image";

// interface Props {
//   description: string; // HTML string
//   images?: string[];
//   limit?: number; // Optional word limit
// }

// export function RenderHTMLWithImagesServer({ description, images = [], limit }: Props) {
//   console.log(images);
  

//   return (
//     <div className="prose max-w-none font-publicsans">

//        <div
//         className="prose prose-lg"
//         dangerouslySetInnerHTML={{ __html: description }}
//       />
//     </div>
//   );
// }
import { Fragment } from "react";
import Image from "next/image";

interface Props {
  description: string; // HTML string
  images?: string[];
  limit?: number; // Optional word limit
}

// Helper to strip HTML tags and limit words
function getLimitedHTML(html: string, limit?: number): string {
  if (!limit) return html;

  const text = html.replace(/<[^>]*>/g, ''); // Remove all HTML tags
  const words = text.split(/\s+/).slice(0, limit); // Limit words
  return words.join(' ') + '...';
}

export function RenderHTMLWithImagesServer({ description, images = [], limit }: Props) {
  const limitedDescription = getLimitedHTML(description, limit);

  const imagesHtml = images
    .map(
      (src) =>
        `<img src="${src}" alt="News Image" style="margin-top: 1rem; max-width: 100%; border-radius: 8px;" />`
    )
    .join("");

  const finalHtml = `${limitedDescription}${imagesHtml}`;

  return (
    <div className="prose max-w-none font-publicsans">
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: finalHtml }}
      />
    </div>
  );
}



