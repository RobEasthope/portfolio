import { useRouter } from "next/router";

import { Project, ProjectProps } from "ui-pkg/pages/Project/Project";
import { getClient, overlayDrafts, sanityClient } from "apis-pkg/sanity/sanity.server";
import { appGlobalsQuery } from "ui-pkg/settings/app-globals.queries";
import { AppGlobalsProps, SettingsProps } from "ui-pkg/settings/Globals";
import { HeaderProps } from "ui-pkg/navigation/Header/Header";
import { GlobalMetadata } from "ui-pkg/types/sanity-schema";
import {
  projectBySlugQuery,
  projectSlugsQuery,
} from "ui-pkg/pages/Project/Project.queries";
import { Error404 } from "ui-pkg/pages/Error404/Error404";

// TYPES
type ProjectBySlugProps = {
  data: {
    project: ProjectProps;
    globals: AppGlobalsProps;
  };
};

// MARKUP
export default function ProjectBySlug({ data }: ProjectBySlugProps) {
  const router = useRouter();
  const { isFallback } = router;
  const { project, globals } = data;

  if (!data.project) {
    return <Error404 />;
  }

  return <Project project={project} globals={globals} />;
}

// SSG CALLS
export const getStaticPaths = async () => {
  const paths = [];

  const pages = (await sanityClient.fetch(projectSlugsQuery)) as [ProjectProps];

  for (const project of pages) {
    const slug = project?.slug?.current;

    paths.push({
      params: { slug },
    });
  }

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
  preview = false,
}: {
  params: { slug: string[] };
  preview: boolean;
}) => {
  // Fetch global data
  const globals: {
    header: HeaderProps;
    globals: GlobalMetadata;
    settings: SettingsProps;
  } = await getClient(preview).fetch(appGlobalsQuery);

  // Fetch project data
  const project = overlayDrafts(
    await getClient(preview).fetch(projectBySlugQuery, {
      slug: params?.slug,
    })
  );

  // Page payload
  return {
    props: {
      data: { project: (project[0] as ProjectProps) || null, globals },
      preview,
    },
    // ISR cache time
    revalidate: 60,
  };
};
