import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}></header>
      <h1>
        Delicious meals, create
        <span className={classes.highlight}>by you</span>
      </h1>

      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun!{" "}
      </p>

      <p className={classes.cta}>
        <Link href="/meals/share"> Share your favorite recipe</Link>
      </p>
      <main className={classes.main}></main>
    </>
  );
}
