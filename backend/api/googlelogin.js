const User = require('../model/UserDetails')
const jwt =require('jsonwebtoken')
const{OAuth2Client}=require('google-auth-library')
const { response } = require('express')

const client= new OAuth2Client("646640035068-eso1sdc4vof6f36und3muubcgso9t0ns.apps.googleusercontent.com")

exports.googlelogin = (req,res)=>{
    const{tokenid} = req.body;

    client.verifyIdToken({tokenid, audience:"646640035068-eso1sdc4vof6f36und3muubcgso9t0ns.apps.googleusercontent.com"}).then(response => {
        const {email,fname,lname} = response.Payload;

        console.log(response.Payload);
    })
    console.log()
}



// function handleCallbackResponse(response) {
//     console.log("Encoded Jwt ID token: " + response.credential);
//     var userObject = jwt_decode(response.credential);
//     console.log(userObject);
//     // setUserData(userObject);
//   }

//   useEffect(() => {
//     // global google 
//     google.accounts.id.initialize({
//       client_id: "646640035068-eso1sdc4vof6f36und3muubcgso9t0ns.apps.googleusercontent.com",
//       callback: handleCallbackResponse
//     });

//     // google.accounts.id.renderButton(
//     //   document.getElementById("signIn"),
//     //   { theme: "outline", size: "large" }
//     // )
//   }, []);