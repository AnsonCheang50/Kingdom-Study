#!/bin/sh

# get current date
DATE=$(date '+%m-%d-%Y') 

if [ -z $1 ]; then
	echo "no argument supplied"
	exit 1
fi

# create filename string
FILE=./utils/logs/"$1"/"$DATE".txt

# if the file doesn't exist
if [ ! -f $FILE ]; then

# create new file
	touch $FILE

# add date to file
	echo $DATE > $FILE
	echo "File created"

# if the file does exist, say so
else
	echo "File already exists"
fi