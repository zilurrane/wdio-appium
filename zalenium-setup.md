
```
$ docker -v
Docker version 18.06.0-ce, build 0ffa825

https://github.com/zalando/zalenium

    # Pull docker-selenium
    docker pull elgalu/selenium

    # Pull Zalenium
    docker pull dosel/zalenium

    # Start      
    docker run --rm -ti --name zalenium -p 4444:4444 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /tmp/videos:/home/seluser/videos \
    --privileged dosel/zalenium start
    
    # Stop
    docker stop zalenium

# grid console
- http://localhost:4444/grid/console

# Zalenium Hub
- http://localhost:4444/wd/hub

# Zalenium Dashboard
- http://localhost:4444/dashboard/

# Live Preview of Running Tests
- http://localhost:4444/grid/admin/live


```

