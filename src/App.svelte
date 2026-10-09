<script lang="ts">
  import { favorites, profile } from './lib/favorites'

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
  <title>{profile.title} — A personal collection</title>
  <meta name="description" content={profile.intro} />
</svelte:head>

<a class="skip-link" href="#collection">Skip to collection</a>
<div class="page-shell">
  <header class="site-header">
    <a class="brand" href="./" aria-label="Stuff I like home"><span class="brand-icon">✳</span> stuff i like<span class="brand-period">.</span></a>
    <a class="collection-link" href="#collection">The collection <span aria-hidden="true">↗</span></a>
  </header>

  <main>
    <section class="hero" aria-labelledby="page-title">
      <div class="hero-copy">
        <p class="eyebrow"><span></span> A PERSONAL CORNER OF THE INTERNET</p>
        <h1 id="page-title">{profile.title}<span class="title-star" aria-hidden="true">✳</span></h1>
        <p class="intro">{profile.intro}</p>
        <div class="hero-meta"><span class="tiny-heart" aria-hidden="true">♡</span> Collected with care <span class="dot">·</span> Always a work in progress</div>
      </div>
      <div class="hero-note" aria-hidden="true"><span class="tape"></span><span class="note-star">✧</span><p>Good things<br />are better<br /><em>shared.</em></p><span class="note-sign">a small reminder ↗</span></div>
    </section>

    <section id="collection" aria-labelledby="collection-heading">
      <div class="collection-heading"><div><p class="eyebrow">THE GOOD STUFF</p><h2 id="collection-heading">A shelf of favorites <span>{favorites.length.toString().padStart(2, '0')}</span></h2></div><p class="sample-label">{profile.isDemo ? 'A sample collection. Make it yours.' : 'A few things worth coming back to.'}</p></div>
      <div class="toolbar">
        <div class="categories" aria-label="Filter by category">
          {#each categories as name}
            <button class:active={category === name} aria-pressed={category === name} onclick={() => category = name}>{name}{#if name === 'Everything'}<span>{favorites.length}</span>{/if}</button>
          {/each}
        </div>
        <label class="search"><span aria-hidden="true">⌕</span><input aria-label="Search favorites" type="search" bind:value={query} placeholder="Find something good…" /></label>
      </div>
      <div class="results-bar"><p aria-live="polite">{visible.length} {visible.length === 1 ? 'favorite' : 'favorites'}{category !== 'Everything' ? ` in ${category.toLowerCase()}` : ' to explore'}</p><label>Sort by <select aria-label="Sort favorites" bind:value={sort}><option value="curated">Curated order</option><option value="alphabetical">Name: A–Z</option></select></label></div>
      <div class="grid">
        {#each visible as item}
          <article class="card">
            <div class="art {item.art}" aria-hidden="true"><span class="art-label">{item.category} / {item.year}</span><div class="art-composition"><span class="art-glyph">{item.glyph}</span><span class="art-title">{item.title}</span><span class="art-creator">{item.creator}</span></div><span class="art-index">NO. {(favorites.indexOf(item) + 1).toString().padStart(2, '0')}</span></div>
            <div class="card-body"><div class="card-meta"><span>{item.category}</span><span>{item.year}</span></div><h3>{item.title}</h3><p class="creator">{item.creator}</p><p class="note">{item.note}</p><div class="card-bottom"><span><span class="little-star" aria-hidden="true">✦</span> Worth coming back to</span>{#if item.url}<a href={item.url} target="_blank" rel="noreferrer" aria-label={`Explore ${item.title} (opens in a new tab)`}>Explore <span aria-hidden="true">↗</span></a>{/if}</div></div>
          </article>
        {:else}
          <div class="empty"><span aria-hidden="true">✧</span><h3>No favorites found</h3><p>Try a different search or explore the whole collection.</p><button onclick={reset}>Show everything</button></div>
        {/each}
      </div>
    </section>
    <aside class="closing"><span aria-hidden="true">✳</span><p>Nothing here is an algorithm’s pick.<br /><em>Just things worth loving.</em></p></aside>
  </main>
  <footer><span>stuff i like. <span class="footer-muted">A little more human, a little less feed.</span></span><a href="#page-title">Back to top ↑</a></footer>
</div>
