import { groq } from "next-sanity";

export const pageBySlugQuery = groq`
  *[_type in ["Page"] && slug.current == $slug]{
    ...,
    "projects": *[_type == "project" && !(_id in path('drafts.**'))]  | order(startDate desc){
      title,
      slug,
      thumbnailImage
    },
    "blocks": rawSections[]{
      ...,
      "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
      "bkg": rawBkg->,
      "cards": rawCards[]{
        ...,
        "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
        "bkg": rawBkg->,
      },
      "muxVideo": rawMuxVideo.asset->,
    }
  }
`;

// All page slugs
export const pageSlugsQuery = groq`
  *[_type == "Page" && defined(slug.current)]{
    slug {
      current
    },
  }
`;
