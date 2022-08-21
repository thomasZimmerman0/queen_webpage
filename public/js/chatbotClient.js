let form = document.querySelector('#CommentForm'); 

form.addEventListener('submit', async (e)=>{
    //prevents default behavior of form (reload)
    e.preventDefault();

    // make fetch call

    let newMessage = {
        username: document.querySelector("#username").value, 
        title: document.querySelector("#title").value,
        message: document.querySelector("#message").value

    }

    //make api call to add a new message 

    let results = await fetch('/api', {
        method: "POST", 
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(newMessage)
    })

    let messages = await results.json(); 

    updateFeedback(messages)

})


const displayMessages = async () => {
    
    let result = await fetch('/api'); 
    let messages = await result.json();  //[{}, {}, {}]

    updateFeedback(messages)
}


const updateFeedback = (messagesArr) => {
    let htmlBlock = "";
    messagesArr.forEach((item) =>{

        htmlBlock += `
        <div class="message-block">
            <div class="title"> ${item.title} </div>
            <div class="name"> ${item.username}</div>
            <div class="feedback">${item.message}</div>
        </div>`

        console.log(item.message);
    })
    
    //attach to a dom element
    let feedbackMessages = document.querySelector('#messageDisplay');
    feedbackMessages.innerHTML = htmlBlock;
}


displayMessages()
