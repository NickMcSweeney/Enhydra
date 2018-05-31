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
wait
printf "\n\nStarting database...\n" &&
npm run db &
printf "\n\nStarting Server...\n" &&
npm start &
printf "\n\nLutra Services Running\n"
cd ../
wait
