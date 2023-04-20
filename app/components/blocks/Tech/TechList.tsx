import { Box } from '~/components/base/Box/Box';
import { ExternalLink } from '~/components/base/ExternalLink/ExternalLink';
import { Type } from '~/components/base/Type/Type';

export type TechProps = {
  _type: 'tech';
  name: string;
  url: string;
};

export type TechListProps = {
  technologies: TechProps[];
};

export const TechList = ({ technologies }: TechListProps) => (
  <Box
    as="ul"
    className="flex flex-wrap justify-center max-w-prose px-2 mx-auto"
  >
    {technologies?.map((tech) => (
      <Type
        as="li"
        key={tech?._id}
        className="inline after:content-['/'] after:mx-0.25 last:after:content-['']"
      >
        <ExternalLink href={tech?.url}>{tech?.name}</ExternalLink>
      </Type>
    ))}
  </Box>
);
