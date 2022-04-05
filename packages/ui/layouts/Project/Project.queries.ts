import { groq } from 'next-sanity';

export const projectBySlugQuery = groq`
  *[_type in ["project"] && slug.current == $slug]{
    ...,
    "client": client->{name, url},
    "agency": agency->{name, url},
    "sections": rawSections[]{
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
export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)]{
    slug {
      current
    },
  }
`;
