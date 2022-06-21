export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2022-06-20',
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
}