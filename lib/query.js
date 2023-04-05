export async function getSortedPostsData(endPath) {
    let url = 'https://be.baround.it/index.php/wp-json/wp/v2/'+endPath
    const res = await fetch(url);
    const data = await res.text();
    return data;
}
export async function getAllPostIds(endPath) {
    let url = 'https://be.baround.it/index.php/wp-json/wp/v2/'+endPath
    const res = await fetch(url);
    const data = await res.text();
    return data.map(item => {
        return {
          params: {
            id: item.slug,
          }
        }
    });
}
export async function getPostData(endPath) {
    let url = 'https://be.baround.it/index.php/wp-json/wp/v2/'+endPath
    const res = await fetch(url);
    const data = await res.text();
    return data;
}