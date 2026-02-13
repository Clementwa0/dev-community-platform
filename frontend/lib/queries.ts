export const BLOGS_QUERY = `
  *[_type == "blog" && published == true] | order(_createdAt desc){
    "id": _id,
    "slug": slug.current,
    title,
    content,
    author,
    "createdAt": _createdAt,
    "updatedAt": _updatedAt,
    published
  }
`;

export const BLOG_BY_SLUG_QUERY = `
  *[_type == "blog" && slug.current == $slug && published == true][0]{
    "id": _id,
    "slug": slug.current,
    title,
    content,
    author,
    "createdAt": _createdAt,
    "updatedAt": _updatedAt,
    published
  }
`;
