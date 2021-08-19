# Working with Docker

## Docker basic commands

### With images

To build a Docker image, run following command:

```
docker build -t test-image-name .
```

To run image in interactive mode

```
docker run -it -p 7777:8000 test-image-name
```

Or run image in silent (daemon) mode

```
docker run -d -p 7777:8000 test-image-name
```

List all images

```
docker image ls
```

Remove all images at once

```
docker rmi $(docker images -q)
```

To remove a particular image

```
docker rmi test-image-name
```

### With containers

List all active containers

```
docker ps
```

List all active and dead containers

```
docker ps -a
```

To stop a particular container

```
sudo docker container stop 0774
```

Stop all running containers

```
docker stop $(docker ps -a -q)
```

Remove a stopped container

```
docker container rm 0774
```

Delete all stopped containers: 

```
docker rm $(docker ps -a -q)
```

### Other

Jump into container shell

```
docker exec -it CONTAINER_ID /bin/sh
```

## References

[Commands](https://docs.docker.com/engine/reference/commandline/docker/)
