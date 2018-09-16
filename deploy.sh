#!/bin/bash

cd website
npm run build:prod
cd ..
mv -v /dist/* /website/public/
git add . && git commit -m "Compile"
git subtree push --prefix website origin prod