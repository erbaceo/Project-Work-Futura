#!/bin/bash

# starting database
cd /opt/lampp
sudo ./xampp start

# starting backend
cd /home/daniele/Scrivania/Corso-web/Project-work/Backend
php artisan serve &
BACK_PID=$!

# starting frontend
cd ../frontend
npm run dev &
FRONT_PID=$!

# function to kill both servers
cleanup() {
	echo "Stopping servers..."
	kill $BACK_PID $FRONT_PID
	exit 0
}

trap cleanup INT TERM

wait $BACK_PID
wait $FRONT_PID
