import { groq } from "next-sanity";

// Global meta data
export const appGlobalsQuery = groq`
  {
    "header": *[_type== 'Header'][0]{
      logo,
      "navigationLeft": rawNavigationLeft[]{
        _key,
        _type,
        title,
        url,
        "to": internalUID->{slug},
      },
      "navigationRight": rawNavigationRight[]{
        _key,
        _type,
        title,
        url,
        "to": internalUID->{slug},
      },
    },
    "footer": *[_type== 'Footer'][0]{
      copyrightText,
      "navigation": rawNavigation[]{
        _key,
        _type,
        title,
        url,
        "to": internalUID->{slug},
      },
    },
    "metadata": *[_type== 'globalMetadata'][0]{
      ...
    },
    "settings": *[_type== 'Settings'][0]{
      "homePageSlug": rawHomePageRef->slug.current
    }
  }
`;

export const homePageRouteQuery = groq`*[_type== 'Settings'][0]{
    "homePageSlug": rawHomePageRef->slug.current
  }
`;
