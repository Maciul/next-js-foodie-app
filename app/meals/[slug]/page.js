export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Meal Recipe</h1>
      <p>{params.slug}</p>
    </main>
  );
}
