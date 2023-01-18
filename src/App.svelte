<script>
  import "carbon-components-svelte/css/g100.css";
  import { db } from "./main";
  import Router from "../node_modules/svelte-spa-router";
  import About from "./About.svelte";
  import Help from "./Help.svelte";
  export let name;

  console.log(db);
</script>

<main>
  <h1>Hello {name}!</h1>
  <nav>
    <a href="/#/about">About</a>
    <a href="/#/help">Help</a>
  </nav>
  <Router
    routes={{
      "/about": About,
      "/help": Help,
    }}
  />
</main>

<style>
</style>
