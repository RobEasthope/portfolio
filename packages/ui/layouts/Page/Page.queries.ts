import { groq } from 'next-sanity';

export const pageBySlugQuery = groq`
  *[_type in ["Page"] && slug.current == $slug]{
     ...,
    "sections": rawSections[]{
      ...,
      "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
      "bkg": rawBkg->,
      "cards": rawCards[]{
        ...,
        "link": rawLink[0]{..., "to": {...internalUID->{...},  }},
        "bkg": rawBkg->,
      },
      "projects": index[]->{_id, title, slug, thumbnailImage},
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
