#!/bin/sh

name=$(date '+%m-%d-%Y') 

touch ./Plans/logs/"$name".txt 

echo $name > ./Plans/logs/"$name".txt