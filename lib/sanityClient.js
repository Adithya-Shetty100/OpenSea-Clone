import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'o71thnn8',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk3qCg34QFJt9m9rczCBQVwF2WmHQZO7YPGkjD3nGYGYituph8TAMjyqPlqPIzE6UlqE1LFbfztHu826vE5y1Q8on1D7lDL0knAh4O4HHSiqimsr3bvkcA6nGl7onohq5o0ehapQiXUsWtaHGq5duDd8sq3coWHd6v3LyqomfpcFZFXSpHEr',
  useCdn: false,
})
