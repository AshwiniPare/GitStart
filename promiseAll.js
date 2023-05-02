const user = {
    name : "Ashwini",
    lastActivityTime : '13th of Jan'
}

const posts = [];

function updateLastUserActivityTime() {
    return new Promise( (resolve, reject) => {
        user.lastActivityTime = new Date().getTime();
        resolve(user.lastActivityTime);
    })
}

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve(post);
        }, 1000);
    })
}

function deletePost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(posts.length > 0) {
                const poppedElem = posts.pop();
                resolve(poppedElem);
            }
            else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        },1000);
    })
}

let promise;
async function userActivity() {
    try {
         promise = await Promise.all([createPost({title: 'POST1'}), updateLastUserActivityTime()])
        console.log(promise);
    } catch(err) {
        console.log(err);
    }

    try {
        promise = await Promise.all([createPost({title: 'POST2'}), updateLastUserActivityTime()]);
        console.log(promise);
    } catch(err) {
        console.log(err);
    }

    try {
        promise = await Promise.all([deletePost(), updateLastUserActivityTime()])
        console.log(posts);
    } catch(err) {
        console.log(err);

    }
    
}

userActivity();

/*Promise.all([createPost({title: 'POST1'}), updateLastUserActivityTime()])
    .then (values => console.log(values))
    .catch(err => console.log(err))

Promise.all([createPost({title: 'POST2'}), updateLastUserActivityTime()])
    .then (values => {
        console.log(values);
        Promise.all([deletePost(), updateLastUserActivityTime()])
       .then( console.log(posts))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err))*/




    
