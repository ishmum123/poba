class Storage {

    STORAGE_KEY = 'followings';

    getFollowings() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    }

    addFollowing(country) {
        const followings = this.getFollowings();
        followings.push(country);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(followings));
    }
}

export default Storage;
