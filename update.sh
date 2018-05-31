git pull

# Building Imaginarium
cd ./imaginarium-openwebapp
printf "\nUpdating Imaginarium Packages...\n"
npm i &&
npm upgrade &&
printf "\nBuilding Imaginarium app...\n"
npm run build
cd ../
wait

# Building Lutris
cd ./lutris-securewebapp
printf "\nUpdating Lutris Packages...\n"
npm i &&
npm upgrade &&
printf "\nBuilding Lutris app...\n"
npm run build
cd ../
wait

# Starting Lutra
cd ./lutra-services
printf "\nUpdating Lutra Service Packages...\n"
npm i && npm upgrade
cd ../
wait
