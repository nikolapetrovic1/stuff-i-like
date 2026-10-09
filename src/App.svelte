<script lang="ts">
  import { favorites, profile, socialLinks } from './lib/favorites'

  let category = $state('Everything')
  let query = $state('')
  let sort = $state('curated')
  const categories = ['Everything', ...new Set(favorites.map(item => item.category))]
  let visible = $derived.by(() => {
    const results = favorites.filter(item =>
      (category === 'Everything' || item.category === category) &&
      `${item.title} ${item.creator} ${item.note} ${item.category}`.toLowerCase().includes(query.trim().toLowerCase())
    )
    return sort === 'alphabetical' ? results.toSorted((a, b) => a.title.localeCompare(b.title)) : results
  })

  function reset() { category = 'Everything'; query = ''; sort = 'curated' }
</script>

<svelte:head>
  <title>Stuff I like</title>
  <meta name="description" content={profile.intro} />
</svelte:head>

<a class="skip-link" href="#collection">Skip to collection</a>
<div class="fixed -inset-[6px] -z-10 bg-cover bg-center bg-no-repeat blur-[3px]" style:background-image={`url("${import.meta.env.BASE_URL}images/bg.jpg")`} aria-hidden="true"></div>
<div class="mx-auto min-h-screen max-w-[1240px] px-[48px] max-[1050px]:px-[30px] max-[500px]:px-[21px]">
  <header id="page-title" class="site-header">
    <div class="brand" aria-label="Stuff i think is cool.">
        Collection of stuff i find cool
    </div>
    {#if socialLinks.length > 0}
      <nav class="social-links" aria-label="Social media">
        {#each socialLinks as social}
          <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} (opens in a new tab)`}>
            {social.label}
          </a>
        {/each}
      </nav>
    {/if}
  </header>

  <main>
    <section id="collection" aria-label="Collection">
      <div class="mt-[29px] flex items-center justify-between gap-[20px] max-[1050px]:flex-col max-[1050px]:items-start max-[1050px]:gap-[14px] max-[500px]:mt-[23px]">
        <div class="categories" aria-label="Filter by category">
          {#each categories as name}
            <button class:active={category === name} aria-pressed={category === name} onclick={() => category = name}>{name}</button>
          {/each}
        </div>
        <label class="search"><span aria-hidden="true">⌕</span><input aria-label="Search favorites" type="search" bind:value={query} placeholder="Find something good…" /></label>
      </div>
      <div class="results-bar"><p aria-live="polite"></p><label>Sort by <select aria-label="Sort favorites" bind:value={sort}><option value="curated">Added order</option><option value="alphabetical">Name</option></select></label></div>
      <ul class="favorites-list" aria-label="Favorites">
        {#each visible as item}
          <li class="favorite-row">
            <div class="min-w-0">
              <h2 class="favorite-title">
                {#if item.url}
                  <a href={item.url} target="_blank" rel="noreferrer" aria-label={`Explore ${item.title} (opens in a new tab)`}>{item.title} <span class="text-[#9ec5f5]" aria-hidden="true">↗</span></a>
                {:else}
                  {item.title}
                {/if}
              </h2>
              <p class="favorite-creator">{item.creator}</p>
              <p class="favorite-note">{item.note}</p>
            </div>
            <div class="favorite-details"><span>{item.category}</span><span>{item.year}</span></div>
          </li>
        {:else}
          <li class="empty"><h2>No favorites found</h2><p>Try a different search or explore the whole collection.</p><button onclick={reset}>Show everything</button></li>
        {/each}
      </ul>
    </section>
  </main>
  <footer><a href="#page-title">Back to top</a></footer>
</div>
