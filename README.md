# Mathamatic

A simple Angular project website that present the user with various maths topics and randomly generates questions to answers based on a user
specified difficulty.

Main aim is to provide something simple that maths students can use to get practice questions.

## Building

Just standard Angular so clone the repo `cd mathamatic`, `ng build --prod` or `yarn build`.

Then scp/rsync the content `dist/` to your favourite webserver.

## Deploying

For deploying Angular apps I just use Nginx, its simple enough.

Something like in the relevant server directive.

`location = /index.html {
    add_header Cache-Control no-cache;
    alias /var/www/html/mathamatic/index.html;
}
location ~ ^(/.*) {
    try_files $1 /index.html;
}`

Having both is important so any none / urls get picked up by the angular routing
rather than Nginx.
