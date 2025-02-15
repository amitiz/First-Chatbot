const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");
const messageInput = document.querySelector(".message-input");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");


// Toggler event listener 
chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot")
});

//keyboard arrwon down event listener 
closeChatbot.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot")
});


//get the message input 


//handle enter key for sending message 
messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if(e.key === "Enter" && userMessage && window.innerWidth > 768) {
        console.log(userMessage);
        //handleInputMessage();
    }
})

const userData = {
    message: null,
    file: {
        data: null,
        mime_type: null,

    }
}

document.querySelector("#file-upload").addEventListener("click", () => fileInput.click())
fileInput.addEventListener("change", () => {
   const file = fileInput.files[0];
   console.log(file);
   if(!file) return;

   const reader = new FileReader();
   reader.onload = (e) => {
    fileInput.value = "";
    fileUploadWrapper.querySelector("img").src = e.target.result;
    fileUploadWrapper.classList.add("file-uploaded");
    console.log(e.target.result);

    const base64String = e.target.result.split(",")[1];
    userData.file = {
        data: base64String,
        mime_type: file.type,
    };
   };

   reader.readAsDataURL(file);

} )
