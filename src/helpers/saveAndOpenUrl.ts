export default async function saveAndOpenUrl(url: string, repos_url: string) {
    const arrayUrl = await AsyncStorage.getItem('arrayUrlKey')
    let newArray: Array<string> = []
    if (arrayUrl != null) {
        newArray = JSON.parse(arrayUrl)
    }
    const urlIndex = newArray.indexOf(url)
    if (urlIndex !== -1) {
        newArray.splice(urlIndex, 1);
    }
    newArray.unshift(url)
    await AsyncStorage.setItem('arrayUrlKey', JSON.stringify(newArray));
    setRepository(userDetail)
    navigate.navigate('repo' as never)
}