#!/bin/bash

output="/home/$USER/Escritorio/ArtMaker/frontend/public/images/art"

for (( i=0; i<6; i++ ))
do
    sleep 2
    curl https://thisartworkdoesnotexist.com > "$output/$i.jpg"
done
