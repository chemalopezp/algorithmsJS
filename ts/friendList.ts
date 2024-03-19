const data = {
  people: ["name1", "name2", "name3", "name4"],
  addresses: {
    name1: {
      city: "...,",
      street: "...",
    },
    name2: {
      city: "SF",
    },
  },
  friends: [
    ["name1", "name3"],
    ["name3", "name1"],
    ["name1", "name4"],
  ],
};

const transformData = (data: Record<string, any>) => {
  /*Transform to new format
    
    The result should be a list of "people objects"
    
    result = [
      {
          "name": <the persons name>,
          "address": <the person's address>,
          "friends": [<list of the person's friends>]
      },
      {
          ...
      }
    ]
    */
  return data.people.map((person: string) => {
    const personResult: { name: string; address: object; friends: string[] } = {
      name: person,
      address: {},
      friends: [],
    };
    personResult.address = data.addresses[person];
    data.friends.map((friendsItem: [string, string]) => {
      if (friendsItem[0] === person) {
        personResult.friends.push(friendsItem[1]);
      } else if (
        friendsItem[1] === person &&
        personResult.friends?.indexOf(friendsItem[0]) > 0
      ) {
        personResult.friends.push(friendsItem[0]);
      }
    });
    return personResult;
  });
};

console.log(JSON.stringify(transformData(data)));
