import { urlFor } from '~/components/base/SanityImage/urlFor';

export function checkMetadata({ title, description, image }) {
  const data = [];

  if (title) {
    data.push(
      { title },
      {
        property: 'og:title',
        content: title,
      },
    );
  }

  if (description) {
    data.push({
      property: 'description',
      content: description,
    });
  }

  if (image) {
    data.push({
      property: 'og:image',
      content: urlFor(image).width(1200).height(630).url(),
    });
  }

  console.log(data);

  return data;
}
