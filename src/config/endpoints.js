
const endpoints = {
    services:{
        users: ["/profiles/search_by_username","/profiles/find"],
        arcade: ["/tbr/get_wallet"]
    },
    bodys:{
        '/profiles/search_by_username':'{user_name}:SMITH',
        '/tbr/get_wallet':'{profile_id}:abcd'    
    }
}

export default endpoints