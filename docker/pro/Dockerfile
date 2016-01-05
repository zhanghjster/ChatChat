FROM centos

RUN mkdir -p /var/www/

ADD chatchat.tar.gz /var/www/

RUN chmod +x /var/www/chatchat/bin/cc && \
	rm -f chatchat.tar.gz

ENV PATH /var/www/chatchat/bin:$PATH

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3001

CMD ["cc"]
