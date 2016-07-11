#! /bin/bash

echo 100000 > /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
