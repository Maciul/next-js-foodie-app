import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return db.prepare("SELECT * FROM MEALS").all();
}

export function getMeal(slug) {
  console.log(slug);
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
