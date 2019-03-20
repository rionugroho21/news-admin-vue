import {database} from '../database/firebase';

export function startLoadingDatas(){
    return database.ref('datas').once('value').then((snapshot) => {
        let datas = [];
        snapshot.forEach((childSnapshot) => {
            datas.push(childSnapshot.val());
        });
        return datas;
    }).catch((error) => {
        console.log(error);
    });
}

export function startAddingPost(data) {
    return database.ref('datas').update({[data.id]: data}).then(() => {
        //console.log(data);
    }).catch((error) => {
        console.log(error);
    });
}

export function startEditingDatas(data) {
    return database.ref(`datas`).update({[data.id]: data}).then(() => {
        // console.log(data);
    }).catch((error) => {
        console.log(error);
    });
}

export function startRemovingDatas(id) {
    return database.ref(`datas/${id}`).remove().then(() => {
        // console.log(id);
    }).catch((error) => {
        console.log(error);
    });
}