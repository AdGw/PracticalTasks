class Api {
  constructor() {
    this.user = {
      id: 1,
      name: "test"
    };
    this.friends = [this.user, this.user, this.user];
    this.photo = "not a real photo";
  }

  getUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.user), 200);
    });
  }

  getFriends(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.friends.slice()), 200);
    });
  }

  getPhoto(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.photo), 200);
    });
  }

  throwError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Intentional Error")), 200);
    });
  }
}

async function asyncAwaitIsYourNewBestFriend() {
  const api = new Api();
  const user = await api.getUser();
  const friends = await api.getFriends(user.id);
  const photo = await api.getPhoto(user.id);
  console.log("asyncAwaitIsYourNewBestFriend", {
    user,
    friends,
    photo
  });
}

// asyncAwaitIsYourNewBestFriend();

async function asyncAwaitLoops() {
  const api = new Api();
  const user = await api.getUser();
  const friends = await api.getFriends(user.id);

  for (let friend of friends) {
    let moreFriends = await api.getFriends(friend.id);
    console.log("asyncAwaitLoops", moreFriends);
  }
}

// asyncAwaitLoops();

async function asyncAwaitLoopsParallel() {
  const api = new Api();
  const user = await api.getUser();
  const friends = await api.getFriends(user.id);
  const friendPromises = friends.map(friend => api.getFriends(friend.id));
  const moreFriends = await Promise.all(friendPromises);
  console.log("asyncAwaitLoopsParallel" + "\n", moreFriends);
}

// asyncAwaitLoopsParallel();

async function asysncAwaitTryCatch() {
  try {
    const api = new Api();
    const user = await api.getUser();
    const friends = await api.getFriends(user.id);

    await api.throwError();
    console.log("Error was not thrown");

    const photo = await api.getPhoto(user.id);
    console.log("async/await", { user, friends, photo });
  } catch (err) {
    console.error(err);
  }
}

// asysncAwaitTryCatch();

async function getUserInfo() {
  const api = new Api();
  const user = await api.getUser();
  const friends = await api.getFriends(user.id);
  const photo = await api.getPhoto(user.id);
  return { user, friends, photo };
}

async function awaitUserInfo() {
  const { user, friends, photo } = await getUserInfo();
  console.log("awaitUserInfo", { user, friends, photo });
}

// awaitUserInfo();

async function getLotsOfUserData() {
  const users = [];
  while (users.length < 10) {
    users.push(await getUserInfo());
  }
  console.log("getLotsOfUserData", users);
}

getLotsOfUserData();

// async function getLotsOfUserDataFaster () {
//   try {
//     const userPromises = Array(10).fill(getUserInfo())
//     const users = await Promise.all(userPromises)
//     console.log('getLotsOfUserDataFaster', users)
//   } catch (err) {
//     console.error(err)
//   }
// }
