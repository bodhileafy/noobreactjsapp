FROM httpd:2.4.43
COPY ./build/ /usr/local/apache2/htdocs/
EXPOSE 80