#!/bin/bash

# Define o diretório base
base_dir="/home/user/Desktop/MongoDB"

# Loop através de todas as subpastas em $base_dir
for folder in $(find "$base_dir" -type d); do
    # Executa alguma ação para cada subpasta
    mv "$folder/comandos.txt" "$folder/comandos.js"
    echo "$folder"
done

