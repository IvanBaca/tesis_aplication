FROM node:10.15.1

RUN npm install -g @angular/cli && \
    npm install -g typescript && \
    npm install -g typings
 
WORKDIR /client
#ADD . /app

CMD /bin/bash -c 'npm install; ng serve --host 0.0.0.0 --port 4200'ch