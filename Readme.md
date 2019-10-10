Development overview
===

This application have docker integrated. Install docker first

* [For ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [For macOS](https://docs.docker.com/docker-for-mac/install/)
* [For windows](https://docs.docker.com/docker-for-windows/install/)

clone this repo to your system

```
git clone git@gitlab.com:reacraft-studio/crafters-hub-backend.git
```

for starting the development server make sure you are in the root of the project and then type


```
docker-compose up
```

The default port of the nodejs application is `3000`.

For the first time always the nodeJS server will fail to connect to database just change some .js files and it will connect to database normally. This happens because mongoDB server takes time to start and nodeJS server start as soon as we do `docker-compose up`.

The setup will take time just for the first time afterwards it will be fast.

Also you have to rebuild your docker image if you add any new package to the project. For rebuilding execute these commands one by one

```
docker-compose -f docker-compose.yml rm app
docker-compose build
docker-compose up
```

For accessing the database from mongo cli use this command

```
mongo --port 24014
```

If for some reason your mongoDB server is not working stop the application by pressing `CTRL+C` and then executing

```
docker-compose up
```

Happy coding!!!!
