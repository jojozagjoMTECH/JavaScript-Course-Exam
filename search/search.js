function search(nameList, searchTerm) {
    return nameList.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase()));
}