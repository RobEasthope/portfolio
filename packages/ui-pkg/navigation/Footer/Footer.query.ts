import groq from "groq";
import { SOCIAL_MEDIA_QUERY } from "ui-pkg/navigation/Footer/components/SocialMedia/SocialMedia.query";

export const FOOTER_QUERY = groq`
  *[_type== 'Footer' && !(_id in path("drafts.**"))][0]{
    "footerNavigation": rawFooterNavigation[]{
      _type,
      _key,
      title,
      url,
      "to": internalUID->{slug},
    },
    "socialMedia": ${SOCIAL_MEDIA_QUERY},
    bhpaLogo,
    bhpaWebsiteUrl,
    copyrightText,
  }
`;
