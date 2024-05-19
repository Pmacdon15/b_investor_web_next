# B Investor Web Next

# Table of Contents
- [Description](#Description)
- [Features](#Features)
  - [Current Features](#Current-Features) 
  - [Coming Soon](#Coming-Soon)  
- [Cloning](#Cloning)
- [Setup](#Setup)
- [Start Up](#Start-Up)
- [Usage](#Usage)

# Description
I have created this fork to show my friend some of the benefits of Next js and React style apps. I really like the idea of this project but I'll be honest I have stolen all of the design elements from my friend who originally created this repository that I forked.

# Features
## Current Features
1. Login using Jwt and Server Actions allowing me to show an error message from the action when the login is rejected.
## Coming Soon
1. Navigation elements for the portfolio page.
2. Layouts for pages to navigate to.
3. Registration page.
4. Auth action. 

# Cloning
1. Clone repository(git ssh method) run this command: 
```bash
git clone https://github.com/Pmacdon15/b_investor_web_next.git
```

# Setup
After cloning run:  
```bash
cd  b_investor_web
```

Once you are inside of the project directory you will have to run a few commands from the root directory to set the project up.
The commands are:

1. Install dependencies:
 ```Bash
 npm i 
 ```

2. Create a file in side of b_investor_web called .env.local with the contents of 
```env
SECRET_KEY_JWT="secretPasswordHere"
```
(skip to [Start Up](#Start-Up) after the above step to run dev server)

3. Now we have to build the client easily done by running:
```Bash
npm run build
```

4. Setup port forwarding on your router for both port 3000 and the answer you gave during setup.

# Start up

For dev run:

```bash
npm run dev
```
or for production run:

Project can be easily started from the root by running:
```Bash
npm run start
```

# Usage
After project is running go to http://localhost:3000 to login.
