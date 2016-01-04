FROM centos

RUN mkdir -p /var/www/

COPY chatchat.tar.gz /var/www/

RUN cd /var/www/ && tar -zxvf chatchat.tar.gz && \
	chmod +x /var/www/chatchat/bin/cc && \
	rm -f chatchat.tar.gz

ENV PATH /var/www/chatchat/bin:$PATH

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3001

CMD ["/var/www/chatchat/bin/cc"]
