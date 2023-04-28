import { Box } from '~/components/base/Box/Box';
import { Type } from '~/components/base/Type/Type';

import type { EduInstitutionProps } from '~/components/about/Education/components/EduInstitution/EduInstitution';
import { EduInstitution } from '~/components/about/Education/components/EduInstitution/EduInstitution';

// TYPES
export type EducationProps = {
  heading?: string;
  education: EduInstitutionProps[];
};

// MARKUP
export const Education = ({ heading, education }: EducationProps) => {
  if (!education?.length) {
    return null;
  }

  return (
    <Box as="section" blockSpacing>
      <Box as="div" className="max-w-prose mx-auto print:max-w-full">
        <Type as="h2" className="text-lg mb-1 text-center">
          {heading}
        </Type>
        <Box as="ul" className=" flex flex-col gap-1.5">
          {education?.map((edu, i) => (
            <EduInstitution
              key={`${edu?._id || ''}-${i}`}
              name={edu.name}
              url={edu.url}
              qualification={edu.qualification}
              startDate={edu.startDate}
              endDate={edu.endDate}
              logo={edu.logo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
