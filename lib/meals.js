import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return db.prepare("SELECT * FROM MEALS").all();
}