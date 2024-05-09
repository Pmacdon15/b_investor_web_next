let stockQuote;
let userLogged = null;

// const finnhub = require('finnhub');

// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = "cmo6he1r01qj3mal97u0cmo6he1r01qj3mal97ug"
//const finnhubClient = new finnhub.DefaultApi()

// finnhubClient.quote("AAPL", (error, data, response) => {
//   console.log("Current : " + data.c)
// });

// //Company profile2
// finnhubClient.companyProfile2({'symbol': 'AAPL'}, (error, data, response) => {
//     console.log(data)
//     console.log("Name : " + data.name)
// });



const express = require('express')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const { error, log, Console } = require('console')

const app = express()

app.use(express.static(path.join(__dirname, '/')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});


app.post('/getquote', (req, res) => {

    try {
      id = req.body
      const listUsers = JSON.parse(fs.readFileSync("users.json"))
      let filteredUsers = listUsers.filter((user) => {
        return (user.id == id.id);
      });
  
      if (filteredUsers[0] === undefined) {
        throw new Error('Invalid owner')
      }
  
        delete filteredUsers[0].password
        user = JSON.stringify(filteredUsers[0])
        res.status(201)
        res.send(user)
  
    } catch (error) {
      res.status(500)
      res.send(error.message)
      console.log(error)
    }
  })





app.post('/login', (req, res) => {

  try {
    login = req.body
    const listUsers = JSON.parse(fs.readFileSync("users.json"))
    let filteredUsers = listUsers.filter((user) => {
      return (user.email == login.username && user.password == login.password);
    });


    if (filteredUsers[0] === undefined) {
      throw new Error('User/Password invalid')
    }

    if (filteredUsers[0].password === login.password) {
      // delete filteredUsers[0].password
      userLogged = JSON.stringify(filteredUsers[0])
      res.status(201)
      res.send(userLogged)
    } else {
      throw new Error('User/Password invalid')
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log(error)
  }
})






app.post('/getUser', (req, res) => {

  try {
      res.status(201)
      res.send(userLogged)
  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log(error)
  }
})





app.post('/addtowatchlist', (req, res) => {
  try {
    console.log(JSON.parse(userLogged));
    let newLoggedUser = JSON.parse(userLogged);
    newLoggedUser.watchlist.push(req.body)
    userLogged = JSON.stringify(newLoggedUser);
    // userLogged.watchlist.push(req.body); 
    
    // if (updated) {
    //   fs.writeFileSync("properties.json", JSON.stringify(allProperties))
    saveUpdate(userLogged)

       res.status(201)
       res.send("stock add sucessfullyx")
    // } else {
    //   throw new Error('Can\'t find this property')
    // }

  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);
  }
})


app.post('/removefromwatchlist', (req, res) => {
  try {
    console.log(JSON.parse(userLogged));
    let newLoggedUser = JSON.parse(userLogged);
    console.log(req.body)

    let indextoremove = -1;

    for(let i = 0; i < newLoggedUser.watchlist.length; i++){

      if ( newLoggedUser.watchlist[i].symbol == req.body.symbol){
        console.log("i = " + i)
        newLoggedUser.watchlist.splice(i,1)
      }
    }


    userLogged = JSON.stringify(newLoggedUser);
    // userLogged.watchlist.push(req.body); 
    
    // if (updated) {
    //   fs.writeFileSync("properties.json", JSON.stringify(allProperties))
    saveUpdate(userLogged)

       res.status(201)
       res.send("stock removed sucessfully")
    // } else {
    //   throw new Error('Can\'t find this property')
    // }

  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);
  }
})






app.post('/getcontact', (req, res) => {

  try {
    id = req.body
    const listUsers = JSON.parse(fs.readFileSync("users.json"))
    let filteredUsers = listUsers.filter((user) => {
      return (user.id == id.id);
    });

    if (filteredUsers[0] === undefined) {
      throw new Error('Invalid owner')
    }

      delete filteredUsers[0].password
      user = JSON.stringify(filteredUsers[0])
      res.status(201)
      res.send(user)

  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log(error)
  }
})
app.post('/listallproperties', (req, res) => {
  param = req.body
  const listUsers = JSON.parse(fs.readFileSync("users.json"))
  if (param.userLogged.type == undefined || param.userLogged.type == "renter") {
    res.sendFile(__dirname + '/properties.json')
  } else {
    let ownerProperties = []
    let allProperties = JSON.parse(fs.readFileSync("properties.json"))
      ownerProperties = allProperties.filter((property) => {
      return property.idOwner == param.userLogged.id;
    });
    JSONOwnerProperties = JSON.stringify(ownerProperties)
    res.send(JSONOwnerProperties)
  }

  

})

app.post('/listworkspaces', (req, res) => {

  try {
    idProperty = req.body
    const listWorkspaces = JSON.parse(fs.readFileSync("workspaces.json"))
    let filteredWorkspaces = []
    filteredWorkspaces = listWorkspaces.filter((workspace) => {
      return workspace.idProperty == idProperty.idProperty;
    });
    returnList = JSON.stringify(filteredWorkspaces)
    res.status(201)
    res.send(returnList)
  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);

  }
})
app.post('/getpropertybyid', (req, res) => {

  try {
    idProperty = req.body
    const listProperties = JSON.parse(fs.readFileSync("properties.json"))
    let filteredProperty = []
    filteredProperty = listProperties.filter((property) => {
      return property.idProperty == idProperty.id;
    });
    returnJSON = JSON.stringify(filteredProperty[0])
    res.status(201)
    res.send(returnJSON)
  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);

  }
})
app.post('/signup', (req, res) => {
  try {
    signup = req.body
    const listUsers = JSON.parse(fs.readFileSync("users.json"))
    let countUsers = listUsers.length
    signup.id = countUsers
    let filteredUsers = []
    filteredUsers = listUsers.filter((user) => {
      return user.email == signup.email;
    });
    if (filteredUsers[0] !== undefined) {
      throw new Error('Existing user, go login!')
    }
    const newListUsers = [...listUsers, signup]
    fs.writeFileSync("users.json", JSON.stringify(newListUsers))
    res.status(201)
    res.send("OK")
  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);
  }
})
app.post('/addproperty', (req, res) => {
  try {
    console.log(req.body)
    newProperty = req.body
    const allProperties = JSON.parse(fs.readFileSync("properties.json"))
    let countProperties = allProperties.length
    newPropertyToAdd = Object.assign(newProperty, { idProperty: countProperties })
    const newListProperties = [...allProperties, newPropertyToAdd]
    console.log(newPropertyToAdd);
    fs.writeFileSync("properties.json", JSON.stringify(newListProperties))
    console.log("try record a new property")
    res.status(201)
    res.send("OK")
  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);
  }
})


app.post('/editproperty', (req, res) => {
  try {
    editProperty = req.body
    const allProperties = JSON.parse(fs.readFileSync("properties.json"))
    let updated = false
    allProperties.forEach(property => {
      if (property.idProperty == editProperty.idProperty) {
        property.name = editProperty.name
        property.address = editProperty.address
        property.neighborhood = editProperty.neighborhood
        property.squaredFeet = editProperty.squaredFeet
        property.hasParkingGarage = editProperty.hasParkingGarage
        property.hasAccessiblePublicTransportation = editProperty.hasAccessiblePublicTransportation
        property.active = editProperty.active
        updated = true
      }
    });

    if (updated) {
      fs.writeFileSync("properties.json", JSON.stringify(allProperties))
      res.status(201)
      res.send("Property updated successful")
    } else {
      throw new Error('Can\'t find this property')
    }

  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);
  }
})
app.post('/editworkspace', (req, res) => {
  try {
    editWorkspace = req.body
    const allWorkspaces = JSON.parse(fs.readFileSync("workspaces.json"))
    let updated = false
    allWorkspaces.forEach(workspace => {
      if (workspace.idWorkspace == editWorkspace.idWorkspace) {
        workspace.nameWorkspace = editWorkspace.nameWorkspace
        workspace.type = editWorkspace.type
        workspace.capacity = editWorkspace.capacity
        workspace.availableDate = editWorkspace.availableDate,
          workspace.isSmokeAllowed = editWorkspace.isSmokeAllowed,
          workspace.price = editWorkspace.price
        workspace.leaseTermType = editWorkspace.leaseTermType,
          workspace.active = editWorkspace.active,
          updated = true
      }
    });
    if (updated) {
      fs.writeFileSync("workspaces.json", JSON.stringify(allWorkspaces))
      res.status(201)
      res.send("Workspace updated successful")
    } else {
      throw new Error('Can\'t find this workspace')
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);
  }
})
app.post('/addworkspace', (req, res) => {
  try {
    newWorkspace = req.body
    const allWorkspaces = JSON.parse(fs.readFileSync("workspaces.json"))
    let countWorkspaces = allWorkspaces.length
    newWorkspaceToAdd = Object.assign(newWorkspace, { idWorkspace: countWorkspaces })
    const newListWorkspaces = [...allWorkspaces, newWorkspaceToAdd]
    fs.writeFileSync("workspaces.json", JSON.stringify(newListWorkspaces))
    res.status(201)
    res.send("OK")
  } catch (error) {
    res.status(500)
    res.send(error.message)
    console.log('Error', error.message);
  }
})
app.listen(3000, () => {
  console.log('App lstening on port 3000!')
})



















function saveUpdate(userToUpdate){

  const allUsers = JSON.parse(fs.readFileSync("users.json")).filter(u => u.id !== JSON.parse(userToUpdate).id);
  allUsers.push(JSON.parse(userToUpdate));
  //console.log("All Users");
  //console.log(allUsers);
  //console.log(allUsers);


  fs.writeFileSync("users.json", JSON.stringify(allUsers))

}