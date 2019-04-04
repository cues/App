
export const userData = response => {

    const user = {
        user_id           : response.data.user.user_id,
        user_name         : response.data.user.user_name,
        user_name_initial : response.data.user.user_name_initial,
        user_username     : response.data.user.username,
        user_sex          : response.data.user.user_sex,
        user_verified     : response.data.user.user_verified,
        user_image        : response.data.user.user_image,
        user_image_2      : response.data.user.user_image_2,
        user_image_3      : response.data.user.user_image_3,
        user_active       : response.data.user.user_active,
        user_posts        : response.data.user.user_posts,
        user_following    : response.data.user.userfollowinge,
        user_followers    : response.data.user.usfollowers,
      }

      return user
    }