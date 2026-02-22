FROM qmcgaw/latexdevcontainer:latest

COPY tl_packages /tmp/tl_packages
RUN tlmgr update --self && xargs tlmgr install < /tmp/tl_packages && rm /tmp/tl_packages
