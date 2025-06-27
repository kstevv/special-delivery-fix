const rawGalleries = [
  {
    title: "iLLFest",
    date: "2025-05-31",
    location: "Austin, TX",
    image: "/images/gallery/illfest.png",
    description: "Florida's biggest bass music festival returns.",
    slug: "illfest",
    imageFilenames: [
        "illfest1.jpg",
        "illfest2.jpg",
        "illfest3.jpg",
        "illfest4.jpg",
        "illfest5.jpg",
        "illfest6.jpg",
        "illfest7.jpg",
        "illfest8.jpg",
        "illfest9.jpg",
        "illfest10.jpg",
        "illfest11.png",
        "illfest12.png",
    ],
  },
 /*  {
    title: "Freaky Deeky",
    date: "2025-10-31",
    location: "Houston, TX",
    image: "/images/festivals/freaky-deaky.jpg",
    description: "A three-day desert rave under the stars.",
    slug: "freaky-deaky",
    imageFilenames: [
        "illfest1.jpg",
        "illfest2.jpg",
        "illfest3.jpg",
        "illfest4.jpg",
        "illfest5.jpg",
        "illfest6.jpg",
        "illfest7.jpg",
        "illfest8.jpg",
        "illfest9.jpg",
        "illfest10.jpg",
        "illfest11.png",
        "illfest12.png",
    ],
  },
   */
];


const galleries = rawGalleries.map((g) => {
  const slug = g.slug.replace(/^\/+|\/+$/g, '');


// ✅ Automatically attach full image paths
  return {
    ...g,
    images: g.imageFilenames.map((file) => {
      const cleanFile = file.replace(/^\/+/, ''); // clean up file name
      const fullPath = `/images/gallery/${slug}/${cleanFile}`; // safe single slash path
      return fullPath;
    }),
  };
});


export default galleries;