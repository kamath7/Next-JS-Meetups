// This folder is for all api methods. needs to be named as api for next js to recognise. 
// route here -> /api/new-meetup

function handler (req, res){
    if (req.method === 'POST'){
        const data = req.body;

        const {title, image, address, description} = data; //all inputs from the post request
        
    }
}

export default handler;