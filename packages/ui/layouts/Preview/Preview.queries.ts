import { groq } from 'next-sanity';

export const previewAnyPageByIdQuery = groq`
  *[_type in ["Page"] && _id == $id]{
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
      "muxVideo": rawMuxVideo.asset->,
    }
  }
`;
