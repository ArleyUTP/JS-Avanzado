export interface CategoriasResponse {
  data: CategoriasAnime[]
}

export interface CategoriasAnime {
  mal_id: number
  name: string
  url: string
  count: number
}
