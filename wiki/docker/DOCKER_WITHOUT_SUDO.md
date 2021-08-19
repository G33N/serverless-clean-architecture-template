# Run Docker commands without sudo

##### 1. Check the `docker` status

```console
sudo service docker status
```

##### 1. Add the `docker` group if it doesn't already exist

```console
$ sudo groupadd docker
```

##### 2. Add the connected user `$USER` to the docker group

Change the username to match your preferred user.

```console
$ sudo gpasswd -a $USER docker

$ newgrp docker
```

**IMPORTANT**: Log out and log back in so that your group membership is re-evaluated.

##### 3. Restart the `docker` daemon

```console
$ sudo service docker restart
```
