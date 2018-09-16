#!/bin/bash

npm run build:prod
mv -v /dist/* /website/public/
git add . && git commit -m "Compile"
git subtree push --prefix website origin prod