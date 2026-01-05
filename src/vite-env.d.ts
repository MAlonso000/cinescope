/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TMDB_BASE_URL: string
    readonly VITE_TMDB_READ_ACCESS_TOKEN: string
    // add other variables here...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
