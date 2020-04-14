import auth0 from '@auth0/nextjs-auth0'

const callback = async(req, res) =>{
    await auth0.handleCallback(req, res, { redirectTo: '/app'})
}

export default callback;