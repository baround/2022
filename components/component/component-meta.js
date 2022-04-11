export default function Meta({ data, postTitle }) {
  let domain = 'https://www.baround.it/';
  return (
    <>
    <meta name="description" content={`${(data && data.yoast_head_json.description) ? data.yoast_head_json.description : 'La guida definitiva ai cocktail bar.'}`} />
    <meta property="og:locale" content="it_IT" />
    <meta property="og:type" content={(data && data.yoast_head_json.og_type) ? data.yoast_head_json.og_type : 'Page'} />
    <meta property="og:title" content={`Baround - ${(data && data.title.rendered) ? data.title.rendered : ''}`} />
    <meta property="og:description" content={`${(data && data.yoast_head_json.description) ? data.yoast_head_json.description : 'La guida definitiva ai cocktail bar.'}`} />
    <meta property="og:url" content={`${domain}${data.slug}`} />
    <meta property="og:site_name" content="Baround" />
    <meta property="og:image" content={`${(data && data.acf.immagine_di_copertina) ? data.acf.immagine_di_copertina : 'https://be.baround.it/wp-content/uploads/2020/10/chi-siamo.jpg'}`} />
    <meta property="og:image:width" content="680" />
    <meta property="og:image:height" content="382" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta name="twitter:card" content="summary_large_image" />
    </>
  )
} 