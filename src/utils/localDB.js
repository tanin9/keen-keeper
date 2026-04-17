

const getAllFromLocalDB = () => {
    
    const allList = localStorage.getItem("allList");
    
    if (allList) return JSON.parse(allList);

    return [];
    

}

const addToLocalDB = (friendData) => {

    const allfriend = getAllFromLocalDB();
    const isExist=allfriend.find(fr=>fr.id===friendData.id)

    if (!isExist){
        allfriend.push(friendData);
        localStorage.setItem("allList", JSON.stringify(allfriend));
    }
    
}

export{getAllFromLocalDB,addToLocalDB}