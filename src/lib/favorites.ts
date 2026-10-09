export type Favorite = {
  title: string
  category: string
  creator: string
  note: string
  year: string
  art: string
  glyph: string
  url: string
}

// Sample content: replace these entries with your own favorites.
export const profile = {
  title: 'Stuff I like.',
  intro: 'A little collection of things that make life a little better. Books with dog-eared pages, albums on repeat, and worlds worth getting lost in.',
  isDemo: true,
}

export const favorites: Favorite[] = [
  { title: 'The Little Prince', category: 'Books', creator: 'Antoine de Saint-Exupéry', note: 'A small book with a very big heart. A reminder to pay attention to the things you can’t see.', year: '1943', art: 'prince', glyph: '✦', url: 'https://www.gutenberg.org/ebooks/search/?query=The+Little+Prince' },
  { title: 'In Rainbows', category: 'Music', creator: 'Radiohead', note: 'For late-night walks and watching the world go by through a train window.', year: '2007', art: 'rainbows', glyph: '◎', url: 'https://www.radiohead.com/' },
  { title: 'Spirited Away', category: 'Films', creator: 'Hayao Miyazaki', note: 'That feeling of stepping into a dream you don’t quite want to wake up from.', year: '2001', art: 'spirited', glyph: '☁', url: 'https://www.ghibli.jp/works/chihiro/' },
  { title: 'Stardew Valley', category: 'Games', creator: 'ConcernedApe', note: 'A few seeds, a little rain, and absolutely no rush. My favorite place to slow down.', year: '2016', art: 'stardew', glyph: '✿', url: 'https://www.stardewvalley.net/' },
  { title: 'The quiet morning', category: 'Little joys', creator: 'Coffee, sunlight & a good notebook', note: 'Before the notifications, before the to-do list. Just a warm cup and a blank page.', year: 'Every day', art: 'morning', glyph: '☕', url: '' },
  { title: 'The Grand Budapest Hotel', category: 'Films', creator: 'Wes Anderson', note: 'Perfectly framed little details, impossible colors, and a story with a soft center.', year: '2014', art: 'budapest', glyph: '♜', url: 'https://www.searchlightpictures.com/thegrandbudapesthotel/' },
]
