# DevTinder 

- create a Vite + react.
- remove unnecessary code.
- Install Tailwind css


Body 
    navBar
    Route=/ - Feed
    Route=/login - login
    Route=/connections - Connections
    Route=/profile - profile.

# Deployment

- Sign up on aws
- Launch instance
- chmod 400 <secret>.pem
- ssh - to connect aws in local terminal
- Install node
- git clone
- Front end 
    - npm install
    - npm run build
    - sudo apt update
    - sudo apt install nginx
    - sudo systemctl start nginx
    - sudo systemctl enable nginx
    - copy code from dist(build) to /var/www/html
    - sudo scp -r dist/* /var/www/html
    - enable port :80 of your instnce.
- Backend
    - npm install
    - updated db password
    - allowed ec2 instance public Ip on MOngo
    - installed npm install pm2 - g 
    - pm2 start npm --start
    - to check logs pm2 logs
    - to flush logs pm2 flush <name>
    - pm2 list 
    - pm2 stop
    - pm2 delete 
    -  pm2 start npm  --name "tinder-be" -- start (name the process)
    - front end : http://65.0.181.170/
    - backend : http://65.0.181.170:3001/

- server configuration for api.
    - sudo nano /etc/nginx/sites-available/default
    - server_name 65.0.181.170;
    - Nginx config:
        -  location /api/ {
            proxy_pass http://localhost:3001/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    - restart nginx: sudo systemctl restart nginx

- Modify the base url in front end project.

# Razorpay Payment Gateway Integration.
    - Signup on razorpay and complete KYC
    - Created a UI for premium page.
    - Creating an API for create order in backend.

# Real time Chat APP (Socket.io)
    - Build the ui for chat window on /chat/:targetUserId
    - setup socket.io in backend.
    - npm i socket.io.