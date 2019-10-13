const commentList = document.querySelector('#comment-list');
const form = document.querySelector('#add-comment-form');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let comment = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    comment.textContent = doc.data().comment;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(comment);
    li.appendChild(cross);

    commentList.appendChild(li);

     // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('comments').doc(id).delete();
    });
}

// getting data
//db.collection('comments').get().then(snapshot => {
   // snapshot.docs.forEach(doc => {
   //     renderCafe(doc);
  //  });
//});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comments').add({
        name: form.name.value,
        comment: form.comment.value
    });
    form.name.value = '';
    form.comment.value = '';
});

// real-time listener
db.collection('comments').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCafe(change.doc);
        } else if (change.type == 'removed'){
            let li = commentList.querySelector('[data-id=' + change.doc.id + ']');
            commentList.removeChild(li);
        }
    });
});