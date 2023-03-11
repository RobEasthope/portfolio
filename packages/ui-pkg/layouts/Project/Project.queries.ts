import { groq } from 'next-sanity';

export const projectBySlugQuery = groq`
  *[_type in ["project"] && pageSlug.current == $slug]{
    ...,
    "clientOrg": client->{name, url},
    "agencyOrg": agency->{name, url},
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
