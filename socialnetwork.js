var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },
}


  var listUsers = function() {
    finalOutput = [];
    for (user in data) {
      userName = data[user]["name"];
      numberofFollowers = data[user]["follows"].length;
      follows = whoFollows(data[user]["follows"]);
      followedBy = whoFollowedBy(user);
      console.log(userName + " follows " + follows + " and is followed by " + followedBy);
    }
  }

  var whoFollows = function(input) {
      var whoFollowsOutput = '';
      for (x = 0; x < input.length; x++) {
        if (x === 0) {
          whoFollowsOutput = data[input[x]]["name"];
        } else if (x === input.length - 1) {
          whoFollowsOutput += " and " + data[input[x]]["name"]
        }
          else {
          whoFollowsOutput += ", " + data[input[x]]["name"]
        };
      }
      return whoFollowsOutput;
  }

  var whoFollowedBy = function(id) {
      var whoFollowedByOutput = '';
      for (user in data) {
        for (a = 0; a < data[user]["follows"].length; a++) {
          if (data[user]["follows"][a] === id && whoFollowedByOutput === '') {
            whoFollowedByOutput += data[user]["name"];
          } else if (data[user]["follows"][a] === id) {
            whoFollowedByOutput += ", " + data[user]["name"];
          } else {
            continue;
          }
        }
      }
      return whoFollowedByOutput;
  }

listUsers();
