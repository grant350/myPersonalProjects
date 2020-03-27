user=$(whoami)
echo $user
echo would you like to delete items on your computer answer yes or no.
read -p "Enter answer in lowercase: " answer

if [[ $answer == "yes" || $answer == "YES" || $answer == "Yes"  ]]
then
# the order of your computers directorys is [ Mac_HD/Users/$user/desktop/folder].
# reminder once bash is open your automaticaly in $user directory.
echo what folder would you like to delete files in? if a space use \\ to escape space.
read -p "enter exact folder name:" folder
fullpath=$( sudo find $HOME -type d -name "$folder" 2>/dev/null )
echo $fullpath
if [ -d "$fullpath" ]
then
cd $fullpath
else
cd $fullpath/..
fi


echo select if you want to delete folders or files? enter d or f.
read -p "enter d or f:" type

if [[ $type == "d" || $type == "D" ]]
then
read -p "enter folder name" foldername
sudo rm -rf $foldername

else
  echo searchquery ex: screen this will select all files with word screen in them
read -p "enter searchquery:" searchquery
  echo extension ex: png jpeg gif
read -p "enter extension:" extension
sudo find  ./ -iname "$searchquery*.$extension" -exec rm -rf '{}' \;
fi



fi
