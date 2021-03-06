export default {
    user: {
        uid: undefined,
        photoULR: undefined,
        displayName: '',
        email: '',
        emailVerified: false,
        settings: {},
        friends: [] // other users
    },
    apiCallsInProgress: [], // ['LOAD_USER_FRIENDS_API_CALL']
    modals: { inviteFriends: false, contactUs: false }
};
