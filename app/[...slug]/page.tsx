export default function Page({ params }: { params: { slug: string } }) {
  return <div>Slug: {params.slug}</div>;
}
