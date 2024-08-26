#!/bin/zsh


tmux new-session -d -n "proxy" -s hakina
tmux source-file .tmux.conf

tmux new-window -n "lib" -t hakina:1
tmux new-window -n "theme" -t hakina:2
tmux new-window -n "app" -t hakina:3

sleep 0.5
tmux send -t hakina:0 "cd projects/demo && rushx proxy" C-m
tmux send -t hakina:1 "cd packages/ui && rushx dev" C-m
tmux send -t hakina:2 "cd packages/theme-horizon && rushx dev" C-m
tmux send -t hakina:3 "cd projects/demo && rushx dev" C-m

tmux -CC attach-session -d

