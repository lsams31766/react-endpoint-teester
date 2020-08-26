
const endpoints = {
    services:{
        users: ["/profiles/search_by_username","/profiles/find"],
        arcade: ["/tbr/get_wallet"],
        auth: ["/auth/jwt", "/auth/refresh_jwt"],
        template: ["/water_glasses","/water_glass/find","/water_glasses/update"],
        articles: [
          "/articles","/articles/find","/articles/find_one","/articles/count",
          "/articles/update",
          "/articles/delete","/articles/like","/articles/unlike",
          "/articles/for_profile","/articles/likers",
          "/widgets","/widgets/find","/widgets/find_one","/widgets/count",
          "/widgets/delete","/widgets/update",
          "/article_profile_likes","/article_profile_likes/find",
          "/article_profile_likes/find_one","/article_profile_likes/delete"
        ],
        feed: ["/feed_definitions/find"]
    },
    bodys:{
        '/profiles/search_by_username':`{"user_name": "SMITH"}`,
        "/profiles/find":`{"filter_fields":{
            "user":{
                "user_name":"LSAMS0309"
                  }
            }
        }`,
        
            "/profiles/find_one":`{
            "filter_fields": {
              "id":
                "b6e9dab7-4bb9-4e5b-9fd6-8e7b03f45d92"
              }
            }`,
        
            "/tbr/get_wallet":'{"profile_id": "abcd"}',
        
            "/auth/jwt":'{"user_name": "CHANDLERSMITH"}',
        
            "/auth/refresh_jwt":'{"refresh_token": "abc"}',
        
             "/articles":`{
              "app":"marvel",
              "title": "First Article",
              "author": "Larry",
              "type": "Announcements",
              "header_image": "Me.jpeg",
              "status": "draft",
              "publish_at": "2018-09-07 12:15:37",
              "enable_feed": true,
              "show_likes": true
            }`,
            "/articles/find":`{
              "filter_fields": {
                "app": "marvel"
               }
            }`,
            "/articles/delete":`{
              "filter_fields": {
                "id": "35f124d7-a295-4c95-a374-89e3a92c0733"
               }
             }`,
             "/articles/update":`{
              "filter_fields": {
                "app": "marvel",
                "id": "f3f319d0-5f05-4ee9-87e3-8a2291071255"
              },
                "update_fields": {
                "likes": {"inc": 1}
              }
             }`,
             "/articles/likers":'{"profile_id":"abc"}',
        
             "/articles/for_profile":`
               {"page":2,"page_count":2,
               "filter_fields":{},
               "select_fields":[],
               "update_fields":{},
               "sorts":[{"calculated_date": false}] }`,
        
           "/widgets":`{
              "sort":0,
              "article_id": "35f124d7-a295-4c95-a374-89e3a92c0733",
              "type": "text",
              "data" : {
                "text" : "the text string that represents this widgets body"
              }
           }`,
           "/widgets/count":'{"filter_fields": {}}',
           "/widgets/find":`{
               "filter_fields": {"id":"abc"}
           }`,
           "/widgets/find_one":`{
               "filter_fields": {"id":"abc"}
           }`,
           "/widgets/update":`{
              "filter_fields": {
                "id": "abc"
              },
                "update_fields": {
                "sort": 3
              }
            }`,
            "/widgets/delete":`{
              "filter_fields": {
                "id": "35f124d7-a295-4c95-a374-89e3a92c0733"
               }
             }`,
        
           "/article_profile_likes":`{
              "article_id": "35f124d7-a295-4c95-a374-89e3a92c0733",
              "profile_id": "abc123"
           }`,
           "/article_profile_likes/count":'{"filter_fields": {}}',
           "/article_profile_likes/find":`{
               "filter_fields": {"profile_id":"abc"}
           }`,
           "/article_profile_likes/find_one":`{
               "filter_fields": {"profile_id":"abc"}
           }`,
           "/article_profile_likes/update":`{
              "filter_fields": {
                "id": "abc"
              },
                "update_fields": {
                "profile_id": "abc"
              }
            }`,
            "/article_profile_likes/delete":`{
              "filter_fields": {
                "id": "35f124d7-a295-4c95-a374-89e3a92c0733"
               }
             }`,
        
             "/feed_definitions/find":`{
               "filter_fields":{},
               "select_fields":["root_post_count","reply_post_count"],
               "page_count":10
             }`
    }
}

export default endpoints