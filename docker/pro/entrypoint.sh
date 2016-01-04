#!/bin/bash

set -e

if [ "${1:0:1}" = '-' ]; then
	set -- cc "$@"
fi

if [ "$1" = 'cc' ]; then
    if [ -z "$REDIS_URL" -a -z "$REDISHOST_PORT" ]; then
        echo >&2 'fatal: missing REDIS_URL or REDISHOST_PORT'
        echo >&2 ' Did you forget to -e REDIS_URL=some-redis:6379'
        echo >&2 ' or --link some-redis:redishost?'
        echo >&2
        exit 1
    fi

    if [ "$REDIS_URL" ]; then
        sed -i.bak "s|redishost:6379|${REDIS_URL}|" /var/www/chatchat/conf/server.cfg
        rm -f /var/www/conf/chatchat/server.cfg.bak
    fi
fi

exec "$@"